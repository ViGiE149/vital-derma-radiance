import { Text, clx } from "@medusajs/ui";

import { getCategoriesList, getCollectionsList } from "@lib/data";

import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6);
  const { product_categories } = await getCategoriesList(0, 6);

  return (
    <footer className="w-full bg-[#D2AE99] text-ui-fg-base">
      <div className="content-container flex flex-col w-full py-16 px-6">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-10">
          <div>
            <LocalizedClientLink
              href="/"
              className="text-3xl font-bold text-ui-fg-base hover:text-ui-fg-subtle uppercase"
              style={{ color: '#FFFFFF' }}
            >
              Vital Derma Radiance
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return null;
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null;

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle text-sm"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "font-semibold"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                          style={{ color: '#FFFFFF' }}
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="hover:text-ui-fg-base"
                                  href={`/categories/${child.handle}`}
                                  data-testid="category-link"
                                  style={{ color: '#FFFFFF' }}
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle text-sm",
                    {
                      "grid-cols-2": collections.length > 3,
                    }
                  )}
                >
                  {collections.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                        style={{ color: '#FFFFFF' }}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>About Us</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle text-sm">
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/about"
                    style={{ color: '#FFFFFF' }}
                  >
                    Our Story
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/contact"
                    style={{ color: '#FFFFFF' }}
                  >
                    Contact Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/privacy-policy"
                    style={{ color: '#FFFFFF' }}
                  >
                    Privacy Policy
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/terms-conditions"
                    style={{ color: '#FFFFFF' }}
                  >
                    Terms & Conditions
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse xsmall:flex-row w-full justify-between items-center text-ui-fg-muted py-6 border-t border-ui-border-subtle">
          <Text className="txt-compact-small" style={{ color: '#FFFFFF' }}>
            © {new Date().getFullYear()} Vital Derma Radiance. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  );
}
