"use client";

import { useEffect, useState, ChangeEvent } from "react";

type BannerSlot = "header" | "middle1" | "middle2";

type Banner = {
  slot: BannerSlot;
  imageUrl: string;
};

type SlotConfig = {
  title: string;
  description: string;
};

const SLOT_CONFIGS: Record<BannerSlot, SlotConfig> = {
  header: {
    title: "Header Image",
    description: "Large hero banner at the top of the page.",
  },
  middle1: {
    title: "Middle Image 1",
    description: "First promotional banner in the middle section.",
  },
  middle2: {
    title: "Middle Image 2",
    description: "Second promotional banner in the middle section.",
  },
};

type SlotState = {
  file: File | null;
  preview: string | null;
  isSaving: boolean;
};

type SlotStates = Record<BannerSlot, SlotState>;

const INITIAL_SLOT_STATE: SlotState = {
  file: null,
  preview: null,
  isSaving: false,
};

function createInitialSlotStates(): SlotStates {
  return {
    header: { ...INITIAL_SLOT_STATE },
    middle1: { ...INITIAL_SLOT_STATE },
    middle2: { ...INITIAL_SLOT_STATE },
  };
}

export default function AdminBannersPage() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [slotStates, setSlotStates] = useState<SlotStates>(
    createInitialSlotStates
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    void fetchBanners();
  }, []);

  async function fetchBanners() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/admin/banners");
      if (!res.ok) {
        throw new Error("Failed to load banners");
      }

      const data: Banner[] = await res.json();
      setBanners(data);

      setSlotStates((prev) => {
        const next = createInitialSlotStates();
        (data || []).forEach((banner) => {
          if (banner.slot in next) {
            next[banner.slot as BannerSlot] = {
              ...prev[banner.slot as BannerSlot],
              file: null,
              preview: banner.imageUrl || null,
              isSaving: false,
            };
          }
        });
        return next;
      });
    } catch (err) {
      console.error(err);
      setError("Unable to load banners. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleFileChange(
    slot: BannerSlot,
    event: ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0] ?? null;

    if (!file) {
      setSlotStates((prev) => ({
        ...prev,
        [slot]: {
          ...prev[slot],
          file: null,
          preview: banners.find((b) => b.slot === slot)?.imageUrl || null,
        },
      }));
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setSlotStates((prev) => ({
        ...prev,
        [slot]: {
          ...prev[slot],
          file,
          preview:
            typeof reader.result === "string" ? reader.result : prev[slot].preview,
        },
      }));
    };
    reader.readAsDataURL(file);
  }

  async function handleSave(slot: BannerSlot) {
    const currentSlotState = slotStates[slot];

    if (!currentSlotState.file) {
      setError("Please choose an image before saving.");
      return;
    }

    try {
      setError(null);
      setSuccessMessage(null);
      setSlotStates((prev) => ({
        ...prev,
        [slot]: {
          ...prev[slot],
          isSaving: true,
        },
      }));

      const formData = new FormData();
      formData.append("file", currentSlotState.file);

      const res = await fetch(`/api/admin/banners/${slot}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to save banner");
      }

      const updated: Banner = await res.json();

      setBanners((prev) => {
        const existingIndex = prev.findIndex((b) => b.slot === slot);
        if (existingIndex === -1) {
          return [...prev, updated];
        }

        const next = [...prev];
        next[existingIndex] = updated;
        return next;
      });

      setSlotStates((prev) => ({
        ...prev,
        [slot]: {
          ...prev[slot],
          file: null,
          preview: updated.imageUrl || null,
          isSaving: false,
        },
      }));

      setSuccessMessage(`Saved ${SLOT_CONFIGS[slot].title} successfully.`);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to save banner. Please try again.");
      setSlotStates((prev) => ({
        ...prev,
        [slot]: {
          ...prev[slot],
          isSaving: false,
        },
      }));
    }
  }

  function renderPreview(slot: BannerSlot) {
    const slotState = slotStates[slot];
    const existing = banners.find((b) => b.slot === slot);
    const hasPreview = Boolean(slotState.preview || existing?.imageUrl);
    const src = slotState.preview || existing?.imageUrl || "";

    if (!hasPreview) {
      return (
        <div className="flex h-32 w-full items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 text-xs text-gray-500">
          No image selected
        </div>
      );
    }

    return (
      <div className="overflow-hidden rounded-md border border-gray-200 bg-gray-50">
        <img
          src={src}
          alt={SLOT_CONFIGS[slot].title}
          className="h-32 w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-gray-900">
          Banners
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Manage the homepage banner images. Upload new images and save each
          slot individually.
        </p>
      </div>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {successMessage && (
        <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {successMessage}
        </div>
      )}

      {loading ? (
        <div className="rounded-lg border border-gray-200 bg-white px-4 py-8 text-center text-sm text-gray-500 shadow-sm">
          Loading banners...
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          {(["header", "middle1", "middle2"] as BannerSlot[]).map((slot) => {
            const config = SLOT_CONFIGS[slot];
            const slotState = slotStates[slot];

            return (
              <section
                key={slot}
                className="flex flex-col rounded-lg border border-gray-100 bg-white p-4 shadow-md"
              >
                <header className="mb-3">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {config.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {config.description}
                  </p>
                </header>

                <div className="space-y-3 flex-1">
                  {renderPreview(slot)}

                  <div className="flex items-center justify-between gap-3">
                    <label className="inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                      <span>Change Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileChange(slot, e)}
                      />
                    </label>

                    <button
                      type="button"
                      onClick={() => void handleSave(slot)}
                      disabled={slotState.isSaving}
                      className="inline-flex items-center justify-center rounded-md bg-[#B8860B] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#a37509] disabled:opacity-60"
                    >
                      {slotState.isSaving ? "Saving..." : "Save"}
                    </button>
                  </div>

                  <p className="text-[11px] leading-snug text-gray-400">
                    Recommended: high-quality JPG or PNG. For now, images are
                    stored on the server under{" "}
                    <code className="rounded bg-gray-100 px-1 py-0.5 text-[10px]">
                      /public/uploads/banners
                    </code>
                    .
                  </p>
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

