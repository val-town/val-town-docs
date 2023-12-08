import { h } from "hastscript";
import { select } from "hast-util-select";

export function valTownOpenButton() {
  return {
    name: "Val Town Open Button",
    baseStyles: `
      .frame.has-title:not(.is-terminal) figcaption {
        justify-content: space-between;
      }
      .valtown-text-link {
        align-self: center;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
      }
      .frame.has-title a.valtown-text-link span.title {
        background: transparent;
      }
      .frame.has-title a.valtown-text-link span.title::after {
        border: none !important;
      }
      .valtown-text-link span:hover {
        text-decoration: underline;
        underline-offset: 0.2em;
      }
      .expressive-code .copy button.valtown {
        width: auto;
        padding-left: 35px;
        padding-right: 10px;
      }
      .expressive-code .copy button.valtown::after {
        -mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 26.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 400 400' style='enable-background:new 0 0 400 400;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bclip-path:url(%23SVGID_00000160897194668637412090000012633273746754457781_);%7D%0A%3C/style%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_1_' y='56.1' width='400' height='287.7'/%3E%3C/defs%3E%3CclipPath id='SVGID_00000007401086114593429840000013539028411075735207_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg style='clip-path:url(%23SVGID_00000007401086114593429840000013539028411075735207_);'%3E%3Cpath d='M330.1,342.1c-14.4,0-26.1-4.5-35-13.4c-9-8.9-13.4-20.9-13.4-35.9V169.6h-28.9v-45.8h28.9V56.1h55.5v67.8H397v45.8h-59.9 v113.5c0,8.8,4.1,13.2,12.3,13.2h42.3v45.8H330.1z'/%3E%3Cpath d='M208.7,148.7l-92.3,152.9h-7.9V157.3c0-18.5-15-33.4-33.5-33.4H53v182.2c0,19.9,16.1,36,36,36h37.7 c20,0,38.5-10.7,48.5-28l110-190.3h-32.5C234.8,123.8,218,133.3,208.7,148.7z'/%3E%3Cpath d='M0,123.8h55.6v45.8H0V123.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
        -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 26.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 400 400' style='enable-background:new 0 0 400 400;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bclip-path:url(%23SVGID_00000160897194668637412090000012633273746754457781_);%7D%0A%3C/style%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_1_' y='56.1' width='400' height='287.7'/%3E%3C/defs%3E%3CclipPath id='SVGID_00000007401086114593429840000013539028411075735207_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg style='clip-path:url(%23SVGID_00000007401086114593429840000013539028411075735207_);'%3E%3Cpath d='M330.1,342.1c-14.4,0-26.1-4.5-35-13.4c-9-8.9-13.4-20.9-13.4-35.9V169.6h-28.9v-45.8h28.9V56.1h55.5v67.8H397v45.8h-59.9 v113.5c0,8.8,4.1,13.2,12.3,13.2h42.3v45.8H330.1z'/%3E%3Cpath d='M208.7,148.7l-92.3,152.9h-7.9V157.3c0-18.5-15-33.4-33.5-33.4H53v182.2c0,19.9,16.1,36,36,36h37.7 c20,0,38.5-10.7,48.5-28l110-190.3h-32.5C234.8,123.8,218,133.3,208.7,148.7z'/%3E%3Cpath d='M0,123.8h55.6v45.8H0V123.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
        
      }
    `,
    hooks: {
      postprocessRenderedBlock: ({ codeBlock, renderData }) => {
        // Only run on val-town compatible code blocks
        if (!["js", "ts", "jsx", "tsx"].includes(codeBlock.language)) return;

        // Only run on blocks marked with `val` meta
        const meta = codeBlock.meta.trim();
        if (meta !== "val") return;

        // Generate the URL
        const encodedCode = encodeURIComponent(codeBlock.code).replace(
          /%20/g,
          "+"
        );
        const url = `https://www.val.town/new?code=${encodedCode}`;

        // Display large button if there is a title
        const caption = select(".has-title figcaption", renderData.blockAst);

        if (caption) {
          caption.children.push(
            h(
              "a",
              {
                href: url,
                class: "valtown-text-link",
                target: "_blank",
                rel: "noopener",
              },
              [h("span", { class: "title" }, ["Run in Val Town ↗"])]
            )
          );
        } else {
          // Display a mini button next to the copy button
          const copyButton = select("div.copy", renderData.blockAst);
          if (copyButton) {
            copyButton.children.push(
              h(
                "a",
                {
                  href: url,
                  target: "_blank",
                  rel: "noopener",
                },
                [
                  h("button", { title: "Run in Val Town", class: "valtown" }, [
                    h("div"),
                    h("span", {}, ["Run in Val Town"]),
                  ]),
                ]
              )
            );
            return;
          }
        }
      },
    },
  };
}
