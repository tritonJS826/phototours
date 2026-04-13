import {useCallback, useEffect, useMemo, useState} from "react";
import {Button} from "src/components/Button/Button";
import {Notification} from "src/components/Notification/Notification";
import styles from "src/components/ArticleForm/ArticleForm.module.scss";

interface ArticleFormData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverUrl: string;
  alt?: string;
  author?: string;
  featured: boolean;
  blocks: Array<{type: string; content?: string; src?: string; alt?: string}>;
}

interface NotificationState {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
}

interface FormField {
  id: keyof ArticleFormData;
  label: string;
  type: string;
  placeholder: string;
  title: string;
  multiline?: boolean;
  rows?: number;
  options?: Array<{label: string; value: string}>;
}

const INITIAL_FORM_DATA: ArticleFormData = {
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  coverUrl: "",
  featured: false,
  blocks: [{type: "text", content: ""}],
};

const INITIAL_NOTIFICATION: NotificationState = {
  message: "",
  type: "success",
  isVisible: false,
};

const FORM_FIELDS: FormField[] = [
  {
    id: "slug",
    label: "Slug",
    type: "text",
    placeholder: "Enter article slug (e.g., my-article-title)",
    title: "Please enter a valid slug",
  },
  {
    id: "title",
    label: "Title",
    type: "text",
    placeholder: "Enter article title",
    title: "Please enter article title",
  },
  {
    id: "excerpt",
    label: "Excerpt",
    type: "textarea",
    placeholder: "Enter article excerpt",
    title: "Please enter article excerpt",
    multiline: true,
    rows: 3,
  },
  {
    id: "content",
    label: "Content",
    type: "textarea",
    placeholder: "Enter article content",
    title: "Please enter article content",
    multiline: true,
    rows: 5,
  },
  {
    id: "coverUrl",
    label: "Cover Image URL",
    type: "text",
    placeholder: "Enter cover image URL",
    title: "Please enter cover image URL",
  },
  {
    id: "alt",
    label: "Alt Text",
    type: "text",
    placeholder: "Enter alt text for image (optional)",
    title: "Enter alt text for image",
  },
  {
    id: "author",
    label: "Author",
    type: "text",
    placeholder: "Enter author name (optional)",
    title: "Enter author name",
  },
  {
    id: "featured",
    label: "Featured Article",
    type: "checkbox",
    placeholder: "",
    title: "Check if this is a featured article",
  },
];

export function ArticleForm({
  onSave,
  initialData,
}: {
  onSave: (data: ArticleFormData) => Promise<void>;
  initialData?: Partial<ArticleFormData>;
}) {
  const [formData, setFormData] = useState<ArticleFormData>(
    INITIAL_FORM_DATA,
  );
  const [blocks, setBlocks] = useState<Array<{
    type: string;
    content?: string;
    src?: string;
    alt?: string;
  }>>([{type: "text", content: ""}]);
  const [notification, setNotification] = useState<NotificationState>(
    INITIAL_NOTIFICATION,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with initial data if provided
  useEffect(() => {
    if (initialData) {
      setFormData({
        slug: initialData.slug ?? "",
        title: initialData.title ?? "",
        excerpt: initialData.excerpt ?? "",
        content: initialData.content ?? "",
        coverUrl: initialData.coverUrl ?? "",
        alt: initialData.alt ?? "",
        author: initialData.author ?? "",
        featured: initialData.featured ?? false,
        blocks: initialData.blocks ?? [{type: "text", content: ""}],
      });
      setBlocks(initialData.blocks && initialData.blocks.length > 0
        ? initialData.blocks
        : [{type: "text", content: ""}]);
    }
  }, [initialData]);

  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement>,
    ) => {
      const {name, value, type, checked} = e.target;

      setFormData(prev => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    },
    [],
  );

  const handleBlockChange = useCallback(
    (index: number, field: string, value: string) => {
      setBlocks(prev => {
        const newBlocks = [...prev];
        newBlocks[index] = {
          ...newBlocks[index],
          [field]: value,
        };

        return newBlocks;
      });
    },
    [],
  );

  const handleBlockTypeChange = useCallback(
    (index: number, value: string) => {
      setBlocks(prev => {
        const newBlocks = [...prev];
        newBlocks[index] = {
          ...newBlocks[index],
          type: value,
          // Reset content based on type
          content: value === "image" ? "" : newBlocks[index].content || "",
          src: value === "image" ? newBlocks[index].src || "" : "",
          alt: value === "image" ? newBlocks[index].alt || "" : "",
        };

        return newBlocks;
      });
    },
    [],
  );

  const addBlock = useCallback(() => {
    setBlocks(prev => [...prev, {type: "text", content: ""}]);
  }, []);

  const removeBlock = useCallback((index: number) => {
    if (blocks.length <= 1) {
      // Prevent removing the last block
      return;
    }
    setBlocks(prev => {
      const newBlocks = [...prev];
      newBlocks.splice(index, 1);

      return newBlocks;
    });
  }, [blocks]);

  const closeNotification = useCallback(() => {
    setNotification(prev => ({...prev, isVisible: false}));
  }, []);

  const showNotification = useCallback((message: string, type: "success" | "error") => {
    setNotification({
      message,
      type,
      isVisible: true,
    });
  }, []);

  const validateField = useCallback(
    (field: keyof ArticleFormData, value: any): string | null => {
      switch (field) {
        case "slug":
          return !value?.trim()
            ? "Please enter a slug"
            : null;
        case "title":
          return !value?.trim()
            ? "Please enter a title"
            : null;
        case "excerpt":
          return !value?.trim()
            ? "Please enter an excerpt"
            : null;
        case "content":
          return !value?.trim()
            ? "Please enter content"
            : null;
        case "coverUrl":
          return !value?.trim()
            ? "Please enter a cover image URL"
            : null;
        default:
          return null;
      }
    },
    [],
  );

  const validateForm = useCallback((): boolean => {
    // Validate standard fields (skip content since blocks can serve as content)
    for (const [field, value] of Object.entries(formData)) {
      if (
        field !== "blocks" &&
        field !== "featured" &&
        field !== "alt" &&
        field !== "author" &&
        field !== "content" // Content is optional if blocks have content
      ) {
        const error = validateField(field as keyof ArticleFormData, value);
        if (error) {
          showNotification(error, "error");

          return false;
        }
      }
    }

    // Validate blocks - at least one block with content OR content field filled
    const hasContent = formData.content && formData.content.trim();
    const hasBlocksWithContent = blocks && blocks.length > 0 && blocks.some(
      b => b.type === "text" && b.content?.trim(),
    ) || blocks.some(
      b => b.type === "image" && b.src?.trim(),
    );

    if (!hasContent && !hasBlocksWithContent) {
      showNotification("Please add content (either in Content field or add a content block)", "error");

      return false;
    }

    // Validate each block based on its type
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      if (block.type === "text" && (!block.content?.trim())) {
        showNotification(`Block ${i + 1}: Text content is required`, "error");

        return false;
      }
      if (block.type === "image" && (!block.src?.trim())) {
        showNotification(`Block ${i + 1}: Image source URL is required`, "error");

        return false;
      }
      if (block.type === "title" && (!block.content?.trim())) {
        showNotification(`Block ${i + 1}: Title content is required`, "error");

        return false;
      }
    }

    return true;
  }, [blocks, formData, validateField, showNotification]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setIsLoading(true);

    try {
      // Prepare data for submission
      const submitData = {
        ...formData,
        blocks: blocks.map(b => ({
          type: b.type,
          content: b.content,
          src: b.src,
          alt: b.alt,
        })),
      };

      await onSave(submitData);
      showNotification("Article saved successfully!", "success");

      // Reset form after successful save (if creating new)
      // In edit mode, we might want to keep the data
    } catch (err: any) {
      showNotification(
        err.message || "Failed to save article. Please try again.",
        "error",
      );
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  }, [blocks, formData, onSave, showNotification, validateForm]);

  // Render block type options
  const blockTypeOptions = useMemo(() => [
    {label: "Text", value: "text"},
    {label: "Image", value: "image"},
    {label: "Title", value: "title"},
    {label: "Separator", value: "separator"},
  ], []);

  const renderedFormFields = useMemo(() => {
    const fieldsWithoutSpecial = FORM_FIELDS.filter(
      field => !["content", "featured"].includes(field.id),
    );

    return fieldsWithoutSpecial.map(({id, label, type, placeholder, title, multiline, rows, options}) => (
      <div
        key={id}
        className={styles.formGroup}
      >
        <label
          htmlFor={id}
          className={styles.formLabel}
        >
          {label}
        </label>
        {type === "checkbox"
          ? (
            <div className={styles.checkboxGroup}>
              <input
                className={styles.formInput}
                type="checkbox"
                id={id}
                name={id}
                checked={formData[id]}
                onChange={handleChange}
                disabled={isLoading}
                aria-describedby={`${id}-error`}
                aria-invalid={validateField(id as keyof ArticleFormData, formData[id]) ? "true" : "false"}
              />
              <span>
                {label}
              </span>
            </div>
          )
          : options
            ? (
              <>
                <select
                  className={styles.formInput}
                  id={id}
                  name={id}
                  value={formData[id] || ""}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  aria-describedby={`${id}-error`}
                  aria-invalid={validateField(id as keyof ArticleFormData, formData[id]) ? "true" : "false"}
                >
                  <option value="">
                    Select an option
                  </option>
                  {options.map(option => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </>
            )
            : multiline
              ? (
                <textarea
                  className={styles.formTextarea}
                  id={id}
                  name={id}
                  rows={rows || 3}
                  value={formData[id] || ""}
                  onChange={handleChange}
                  required
                  placeholder={placeholder}
                  disabled={isLoading}
                  aria-describedby={`${id}-error`}
                  aria-invalid={validateField(id as keyof ArticleFormData, formData[id]) ? "true" : "false"}
                />
              )
              : (
                <input
                  className={styles.formInput}
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id] || ""}
                  onChange={handleChange}
                  required
                  placeholder={placeholder}
                  disabled={isLoading}
                  aria-describedby={`${id}-error`}
                  aria-invalid={validateField(id as keyof ArticleFormData, formData[id]) ? "true" : "false"}
                />
              )}
        {id === "coverUrl" && formData.coverUrl && (
          <div className={styles.coverImagePreview}>
            <img
              src={formData.coverUrl}
              alt={formData.alt || "Cover preview"}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        )}
      </div>
    ));
  }, [formData, handleChange, isLoading, validateField]);

  return (
    <>
      <form
        className={styles.articleForm}
        onSubmit={handleSubmit}
        noValidate
        aria-label="Article form"
      >
        <div className={styles.formHeader}>
          <h2>
            {initialData ? "Edit Article" : "Create Article"}
          </h2>
          <Button
            variant="outline"
            onClick={() => {
            // This would need a navigate callback prop
            }}
            type="button"
          >
            Cancel
          </Button>
        </div>

        {renderedFormFields}

        {/* Featured checkbox */}
        <div className={styles.formGroup}>
          <div className={styles.checkboxGroup}>
            <input
              className={styles.formInput}
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              disabled={isLoading}
            />
            <span>
              Featured Article
            </span>
          </div>
        </div>

        {/* Content Blocks Section */}
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            Content Blocks
          </label>
          <div className={styles.blocksContainer}>
            {blocks.map((block, index) => (
              <div
                key={index}
                className={styles.blockItem}
              >
                <div className={styles.blockHeader}>
                  <h4>
                    Block
                    {index + 1}
                  </h4>
                  <Button
                    variant="outline"
                    size="small"
                    onClick={() => removeBlock(index)}
                    disabled={blocks.length <= 1}
                    type="button"
                  >
                    Remove
                  </Button>
                </div>
                <div className={styles.blockFields}>
                  <div className={styles.blockField}>
                    <label className={styles.formLabel}>
                      Block Type
                    </label>
                    <select
                      className={styles.formInput}
                      value={block.type}
                      onChange={e => handleBlockTypeChange(index, e.target.value)}
                      disabled={isLoading}
                    >
                      {blockTypeOptions.map(option => (
                        <option
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {block.type === "text" && (
                    <div className={styles.blockField}>
                      <label className={styles.formLabel}>
                        Content
                      </label>
                      <textarea
                        className={styles.formTextarea}
                        value={block.content || ""}
                        onChange={e => handleBlockChange(index, "content", e.target.value)}
                        rows={3}
                        placeholder="Enter text content..."
                        disabled={isLoading}
                      />
                    </div>
                  )}

                  {block.type === "image" && (
                    <>
                      <div className={styles.blockField}>
                        <label className={styles.formLabel}>
                          Image URL
                        </label>
                        <input
                          className={styles.formInput}
                          type="text"
                          value={block.src || ""}
                          onChange={e => handleBlockChange(index, "src", e.target.value)}
                          placeholder="Enter image URL..."
                          disabled={isLoading}
                        />
                      </div>
                      <div className={styles.blockField}>
                        <label className={styles.formLabel}>
                          Alt Text (optional)
                        </label>
                        <input
                          className={styles.formInput}
                          type="text"
                          value={block.alt || ""}
                          onChange={e => handleBlockChange(index, "alt", e.target.value)}
                          placeholder="Enter alt text..."
                          disabled={isLoading}
                        />
                      </div>
                      {block.src && (
                        <div className={styles.imagePreview}>
                          <img
                            src={block.src}
                            alt={block.alt || "Preview"}
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </div>
                      )}
                    </>
                  )}

                  {block.type === "title" && (
                    <div className={styles.blockField}>
                      <label className={styles.formLabel}>
                        Title
                      </label>
                      <input
                        className={styles.formInput}
                        type="text"
                        value={block.content || ""}
                        onChange={e => handleBlockChange(index, "content", e.target.value)}
                        placeholder="Enter title..."
                        disabled={isLoading}
                      />
                    </div>
                  )}

                  {block.type === "separator" && (
                    <div className={styles.blockField}>
                      <div className={styles.separatorPreview}>
                        ─────────────────────
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className={styles.blockFooter}>
              <Button
                variant="secondary"
                onClick={addBlock}
                type="button"
                disabled={isLoading}
              >
                Add Block
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.formActions}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Article"}
          </button>
        </div>
      </form>
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={closeNotification}
      />
    </>
  );
}
