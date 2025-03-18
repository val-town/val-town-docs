import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import { valTownOpenButton } from "./plugins/val-town-open-button.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.val.town/",
  redirects: {
    "/api/vals/": "/openapi.html#tag/vals",
    "/api/eval/": "/openapi.html#tag/vals",
    "/api/my-resources/": "/openapi.html#tag/me",
    "/api/users/": "/openapi.html#tag/users",
    "/api/aliases/": "/openapi.html#tag/alias",
    "/api/run/": "/openapi.html#tag/vals/GET/v1/run/{valname}",
  },
  integrations: [
    starlightLinksValidator(),
    starlight({
      title: "Docs | Val Town",
      defaultLocale: "root",
      components: {
        Footer: "./src/components/Footer.astro",
      },
      head: [
        {
          tag: 'script',
          content: `
            // Add copy page dropdown button
            (function() {
              // Track if we've already added the button
              let buttonAdded = false;
              
              function addCopyPageButton() {
                // Avoid adding multiple buttons
                if (buttonAdded || document.getElementById('copy-page-button-container')) {
                  return;
                }
                
                // Get the current path and construct markdown URL
                const path = window.location.pathname;
                const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
                const mdUrl = normalizedPath === '' ? '/index.md' : normalizedPath + '.md';
                const fullUrl = window.location.origin + normalizedPath;
                
                // Create ChatGPT deep link with encoded URL
                const chatGptPrompt = "Read " + fullUrl + ".md so I can ask questions about it";
                const chatGptUrl = "https://chatgpt.com/?hints=search&q=" + encodeURIComponent(chatGptPrompt);
                
                // Find the main heading (h1)
                const mainHeading = document.querySelector('main h1') || 
                                   document.querySelector('article h1') || 
                                   document.querySelector('.content h1') ||
                                   document.querySelector('h1');
                
                if (!mainHeading) return;
                
                // Create a container for heading + button with right alignment
                const headingContainer = document.createElement('div');
                headingContainer.style.display = 'flex';
                headingContainer.style.justifyContent = 'space-between';
                headingContainer.style.alignItems = 'flex-end';
                headingContainer.style.width = '100%';
                headingContainer.style.marginBottom = '1rem';
                
                // Create a container for our button
                const buttonContainer = document.createElement('div');
                buttonContainer.id = 'copy-page-button-container';
                buttonContainer.style.display = 'inline-flex';
                buttonContainer.style.position = 'relative';
                
                // Create the button group
                const buttonGroup = document.createElement('div');
                buttonGroup.style.display = 'flex';
                buttonGroup.style.position = 'relative';
                buttonGroup.style.borderRadius = '6px';
                buttonGroup.style.overflow = 'hidden';
                buttonGroup.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
                
                // Create the main Copy page button
                const copyButton = document.createElement('button');
                copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path></svg>&nbsp;Copy page';
                
                // Style the copy button with Stripe-like dimensions
                copyButton.style.display = 'flex';
                copyButton.style.alignItems = 'center';
                copyButton.style.justifyContent = 'center';
                copyButton.style.padding = '10px 10px'; // Shorter height like Stripe
                copyButton.style.border = '1px solid var(--sl-color-gray-5, #e2e8f0)';
                copyButton.style.borderRight = 'none';
                copyButton.style.borderTopLeftRadius = '6px';
                copyButton.style.borderBottomLeftRadius = '6px';
                copyButton.style.backgroundColor = 'white';
                copyButton.style.color = 'var(--sl-color-gray-12, #1a202c)';
                copyButton.style.fontSize = '14px';
                copyButton.style.fontWeight = '500';
                copyButton.style.cursor = 'pointer';
                copyButton.style.lineHeight = '1';
                
                // Create the dropdown toggle button
                const dropdownToggle = document.createElement('button');
                dropdownToggle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M6 9l6 6 6-6"></path></svg>';
                
                // Style the dropdown toggle with Stripe-like dimensions
                dropdownToggle.style.display = 'flex';
                dropdownToggle.style.alignItems = 'center';
                dropdownToggle.style.justifyContent = 'center';
                dropdownToggle.style.padding = '6px 6px'; // Shorter height like Stripe
                dropdownToggle.style.border = '1px solid var(--sl-color-gray-5, #e2e8f0)';
                dropdownToggle.style.borderTopRightRadius = '6px';
                dropdownToggle.style.borderBottomRightRadius = '6px';
                dropdownToggle.style.backgroundColor = 'white';
                dropdownToggle.style.color = 'var(--sl-color-gray-12, #1a202c)';
                dropdownToggle.style.cursor = 'pointer';
                dropdownToggle.style.lineHeight = '1';
                
                // Create the dropdown
                const dropdown = document.createElement('div');
                dropdown.style.display = 'none';
                dropdown.style.position = 'absolute';
                dropdown.style.top = '100%';
                dropdown.style.right = '0';
                dropdown.style.marginTop = '4px';
                dropdown.style.backgroundColor = 'var(--sl-color-bg, white)';
                dropdown.style.border = '1px solid var(--sl-color-gray-5, #e2e8f0)';
                dropdown.style.borderRadius = '6px';
                dropdown.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                dropdown.style.minWidth = '260px';
                dropdown.style.zIndex = '1000';
                dropdown.style.overflow = 'hidden';
                
                // Create "Copy page" option with neutral colors
                const copyPageOption = document.createElement('div');
                copyPageOption.innerHTML = '<div style="display: flex; align-items: center; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path></svg><div><div>Copy page</div><div style="font-size: 12px; opacity: 0.8;">Copy this page as Markdown for LLMs</div></div></div>';
                copyPageOption.style.padding = '10px 16px';
                copyPageOption.style.cursor = 'pointer';
                copyPageOption.style.borderBottom = '1px solid var(--sl-color-gray-5, #e2e8f0)';
                copyPageOption.style.color = 'inherit'; // Use default text color
                
                // Create "View as Markdown" option with neutral colors
                const viewMarkdownOption = document.createElement('a');
                viewMarkdownOption.href = mdUrl;
                viewMarkdownOption.target = '_blank';
                viewMarkdownOption.innerHTML = '<div style="display: flex; align-items: center; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg><div><div>View as Markdown <svg style="display: inline-block; vertical-align: -0.125em; margin-left: 4px;" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg></div><div style="font-size: 12px; opacity: 0.8;">View this page as plain text</div></div></div>';
                viewMarkdownOption.style.padding = '10px 16px';
                viewMarkdownOption.style.textDecoration = 'none';
                viewMarkdownOption.style.color = 'inherit'; // Use default text color
                viewMarkdownOption.style.display = 'block';
                viewMarkdownOption.style.borderBottom = '1px solid var(--sl-color-gray-5, #e2e8f0)';
                
                // Create "Open in ChatGPT" option with the exact ChatGPT logo
                const openChatGPTOption = document.createElement('a');
                openChatGPTOption.href = chatGptUrl;
                openChatGPTOption.target = '_blank';
                openChatGPTOption.rel = 'noopener noreferrer';
                openChatGPTOption.innerHTML = '<div style="display: flex; align-items: center; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" style="flex-shrink: 0;"><path fill="currentColor" d="M30.7,7.27L28.33,9.1c-1.605-2.067-4.068-3.209-6.697-3.092C17.313,6.2,14,9.953,14,14.277l0,9.143 l10.5,6.12l-1,1.72l-11.706-6.827C11.302,24.146,11,23.62,11,23.051l0-8.687C11,8.1,16.129,2.79,22.39,3.007 C25.669,3.12,28.68,4.663,30.7,7.27z"></path><path fill="currentColor" d="M12.861,9.833l0.4,2.967c-2.592,0.357-4.813,1.919-6.026,4.254c-1.994,3.837-0.4,8.582,3.345,10.745 l7.918,4.571l10.55-6.033l0.99,1.726l-11.765,6.724c-0.494,0.282-1.101,0.281-1.594-0.003l-7.523-4.343 C3.73,27.308,1.696,20.211,5.014,14.898C6.752,12.114,9.594,10.279,12.861,9.833z"></path><path fill="currentColor" d="M6.161,26.563l2.77,1.137c-0.987,2.423-0.745,5.128,0.671,7.346 c2.326,3.645,7.233,4.638,10.977,2.476l7.918-4.572l0.05-12.153l1.99,0.006l-0.059,13.551c-0.002,0.569-0.307,1.094-0.8,1.379 l-7.523,4.343c-5.425,3.132-12.588,1.345-15.531-4.185C5.083,32.994,4.914,29.616,6.161,26.563z"></path><path fill="currentColor" d="M17.3,40.73l2.37-1.83c1.605,2.067,4.068,3.209,6.697,3.092C30.687,41.8,34,38.047,34,33.723l0-9.143 l-10.5-6.12l1-1.72l11.706,6.827C36.698,23.854,37,24.38,37,24.949l0,8.687c0,6.264-5.13,11.574-11.39,11.358 C22.331,44.88,19.32,43.337,17.3,40.73z"></path><path fill="currentColor" d="M35.139,38.167l-0.4-2.967c2.592-0.357,4.813-1.919,6.026-4.254c1.994-3.837,0.4-8.582-3.345-10.745 l-7.918-4.571l-10.55,6.033l-0.99-1.726l11.765-6.724c0.494-0.282,1.101-0.281,1.594,0.003l7.523,4.343 c5.425,3.132,7.459,10.229,4.141,15.543C41.248,35.886,38.406,37.721,35.139,38.167z"></path><path fill="currentColor" d="M41.839,21.437l-2.77-1.137c0.987-2.423,0.745-5.128-0.671-7.346 c-2.326-3.645-7.233-4.638-10.977-2.476l-7.918,4.572l-0.05,12.153l-1.99-0.006l0.059-13.551c0.002-0.569,0.307-1.094,0.8-1.379 l7.523-4.343c5.425-3.132,12.588-1.345,15.531,4.185C42.917,15.006,43.086,18.384,41.839,21.437z"></path></svg><div><div>Open in ChatGPT <svg style="display: inline-block; vertical-align: -0.125em; margin-left: 4px;" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg></div><div style="font-size: 12px; opacity: 0.8;">Ask questions about this page</div></div></div>';
                openChatGPTOption.style.padding = '10px 16px';
                openChatGPTOption.style.textDecoration = 'none';
                openChatGPTOption.style.color = 'inherit'; // Use default text color
                openChatGPTOption.style.display = 'block';
                
                // Copy markdown content
                function copyMarkdownContent() {
                  // Display loading state
                  const originalText = copyButton.innerHTML;
                  const originalOptionText = copyPageOption.innerHTML;
                  
                  copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>&nbsp;Copying...';
                  copyPageOption.innerHTML = '<div style="display: flex; align-items: center; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg><div><div>Copying...</div><div style="font-size: 12px; color: #6b7280;">Fetching page content</div></div></div>';
                  
                  // Fetch the markdown content
                  fetch(mdUrl)
                    .then(response => {
                      if (!response.ok) {
                        throw new Error('Network response was not ok');
                      }
                      return response.text();
                    })
                    .then(markdown => {
                      navigator.clipboard.writeText(markdown)
                        .then(() => {
                          // Success state
                          copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><path d="M20 6L9 17l-5-5"></path></svg>&nbsp;Copied!';
                          copyPageOption.innerHTML = '<div style="display: flex; align-items: center; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M20 6L9 17l-5-5"></path></svg><div><div>Copied!</div><div style="font-size: 12px; color: #6b7280;">Page content copied to clipboard</div></div></div>';
                          
                          setTimeout(() => {
                            copyButton.innerHTML = originalText;
                            copyPageOption.innerHTML = originalOptionText;
                            dropdown.style.display = 'none';
                          }, 2000);
                        })
                        .catch(err => {
                          // Error state
                          copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>&nbsp;Failed to copy';
                          copyPageOption.innerHTML = '<div style="display: flex; align-items: center; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg><div><div>Failed to copy</div><div style="font-size: 12px; color: #6b7280;">Please try again</div></div></div>';
                          
                          setTimeout(() => {
                            copyButton.innerHTML = originalText;
                            copyPageOption.innerHTML = originalOptionText;
                          }, 2000);
                        });
                    })
                    .catch(err => {
                      // Error state
                      copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -0.125em;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>&nbsp;Failed to copy';
                      copyPageOption.innerHTML = '<div style="display: flex; align-items: center; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg><div><div>Failed to fetch</div><div style="font-size: 12px; color: #6b7280;">Could not get markdown content</div></div></div>';
                      
                      setTimeout(() => {
                        copyButton.innerHTML = originalText;
                        copyPageOption.innerHTML = originalOptionText;
                      }, 2000);
                    });
                }
                
                // Apply a hover effect that respects dark mode
                function addHoverEffect(element) {
                  element.addEventListener('mouseover', function() {
                    // Check if we're in dark mode
                    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark' || 
                                      document.documentElement.classList.contains('dark') ||
                                      window.matchMedia('(prefers-color-scheme: dark)').matches;
                    
                    if (isDarkMode) {
                      this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; // Subtle light overlay for dark mode
                    } else {
                      this.style.backgroundColor = '#f9f9f9'; // Light grey for light mode
                    }
                  });
                  
                  element.addEventListener('mouseout', function() {
                    // Reset background color to empty string to remove the inline style completely
                    this.style.backgroundColor = '';
                  });
                }
                
                // Style the main button and dropdown toggle for dark mode
                function setButtonColors() {
                  const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark' || 
                                    document.documentElement.classList.contains('dark') ||
                                    window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  // Set appropriate colors for the main button and dropdown toggle
                  if (isDarkMode) {
                    copyButton.style.backgroundColor = '#1e1e1e'; // Dark background
                    copyButton.style.color = '#f3f4f6'; // Light text
                    copyButton.style.border = '1px solid #4b5563'; // Dark mode border
                    
                    dropdownToggle.style.backgroundColor = '#1e1e1e'; // Dark background
                    dropdownToggle.style.color = '#f3f4f6'; // Light text
                    dropdownToggle.style.border = '1px solid #4b5563'; // Dark mode border
                  } else {
                    copyButton.style.backgroundColor = 'white'; // Light background
                    copyButton.style.color = 'var(--sl-color-gray-12, #1a202c)'; // Dark text
                    copyButton.style.border = '1px solid var(--sl-color-gray-5, #e2e8f0)'; // Light mode border
                    
                    dropdownToggle.style.backgroundColor = 'white'; // Light background
                    dropdownToggle.style.color = 'var(--sl-color-gray-12, #1a202c)'; // Dark text
                    dropdownToggle.style.border = '1px solid var(--sl-color-gray-5, #e2e8f0)'; // Light mode border
                  }
                }
                
                // Call the function to set initial colors
                setButtonColors();
                
                // Listen for theme changes
                const observer = new MutationObserver(() => {
                  setButtonColors();
                });
                
                // Watch for theme changes on the document element
                observer.observe(document.documentElement, { 
                  attributes: true, 
                  attributeFilter: ['data-theme', 'class'] 
                });
                
                // Apply hover effects to dropdown items and buttons
                addHoverEffect(copyPageOption);
                addHoverEffect(viewMarkdownOption);
                addHoverEffect(openChatGPTOption);
                addHoverEffect(copyButton);
                addHoverEffect(dropdownToggle);
                
                // Add event listeners for button actions
                copyButton.addEventListener('click', copyMarkdownContent);
                copyPageOption.addEventListener('click', copyMarkdownContent);
                
                dropdownToggle.addEventListener('click', function(e) {
                  e.stopPropagation();
                  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
                });
                
                // Close dropdown when clicking outside
                document.addEventListener('click', function(event) {
                  if (!buttonContainer.contains(event.target)) {
                    dropdown.style.display = 'none';
                  }
                });
                
                // Assemble the elements
                dropdown.appendChild(copyPageOption);
                dropdown.appendChild(viewMarkdownOption);
                dropdown.appendChild(openChatGPTOption);
                
                buttonGroup.appendChild(copyButton);
                buttonGroup.appendChild(dropdownToggle);
                
                buttonContainer.appendChild(buttonGroup);
                buttonContainer.appendChild(dropdown);
                
                // Replace the heading with our container
                const headingParent = mainHeading.parentElement;
                
                // Get original styles from heading
                const headingStyle = window.getComputedStyle(mainHeading);
                const headingMarginBottom = headingStyle.marginBottom;
                
                // If heading has a bottom margin, apply it to our container
                if (headingMarginBottom && headingMarginBottom !== '0px') {
                  headingContainer.style.marginBottom = headingMarginBottom;
                  mainHeading.style.margin = '0';
                }
                
                // Replace the heading with our container
                headingParent.insertBefore(headingContainer, mainHeading);
                headingContainer.appendChild(mainHeading);
                headingContainer.appendChild(buttonContainer);
                
                buttonAdded = true;
              }
              
              // Single attempt approach - we'll let the mutation observer handle any timing issues
              function initializeCopyButton() {
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', addCopyPageButton);
                } else {
                  addCopyPageButton();
                }
                
                // Watch for content changes that might affect our button
                const observer = new MutationObserver(() => {
                  if (!buttonAdded) {
                    addCopyPageButton();
                  }
                });
                
                // Start observing once the body is available
                if (document.body) {
                  observer.observe(document.body, { childList: true, subtree: true });
                } else {
                  window.addEventListener('load', () => {
                    observer.observe(document.body, { childList: true, subtree: true });
                  });
                }
                
                // Handle SPA navigation
                document.addEventListener('astro:page-load', () => {
                  buttonAdded = false;
                  addCopyPageButton();
                });
              }
              
              initializeCopyButton();
            })();
          `,
        },
      ],
      editLink: {
        baseUrl: "https://github.com/val-town/val-town-docs/edit/main/",
      },
      lastUpdated: true,
      pagination: false,
      locales: {
        root: {
          lang: "en",
          label: "English",
        },
      },
      social: {
        github: "https://github.com/val-town/val-town-docs",
        twitter: "https://twitter.com/valdottown",
        youtube: "https://www.youtube.com/@valDotTown",
        discord: "https://discord.val.town",
      },
      logo: {
        light: "./src/assets/logo.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      customCss: [
        "@fontsource/ibm-plex-sans/400.css",
        "@fontsource/ibm-plex-sans/600.css",
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Val Town Docs",
          link: "/",
        },
        {
          label: "Quickstarts",
          autogenerate: { directory: "quickstarts" },
        },
        {
          label: "Vals",
          items: [
            {
              label: "Overview",
              link: "vals/",
            },
            {
              label: "Script",
              link: "vals/script",
            },
            {
              label: "HTTP",
              autogenerate: { directory: "vals/http" },
              collapsed: true,
              // TODO - get this to not be bold
            },
            {
              label: "Cron",
              link: "vals/cron",
            },
            {
              label: "Email",
              link: "vals/email",
            },
          ],
        },
        {
          label: "Projects",
          badge: "Beta",
          autogenerate: { directory: "projects" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Standard Library",
          items: [
            { label: "Email", link: "std/email" },
            {
              label: "SQLite",
              autogenerate: { directory: "std/SQLite" },
              collapsed: true,
            },
            { label: "Blob", link: "std/blob" },
            { label: "Proxied fetch", link: "std/fetch" },
            { label: "OpenAI", link: "std/openai" },
          ],
        },
        {
          label: "REST API",
          autogenerate: { directory: "api" },
          collapsed: true,
        },
        {
          label: "Troubleshooting",
          autogenerate: { directory: "troubleshooting" },
          collapsed: true,
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
          collapsed: true,
        },
        {
          label: "Integrations",
          autogenerate: { directory: "integrations" },
          collapsed: true,
        },

        {
          label: "Contact",
          autogenerate: { directory: "contact-us" },
          collapsed: true,
        },
      ],
      expressiveCode: {
        plugins: [valTownOpenButton()],
      },
    }),
  ],
});
