<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Preserve TanStack Start, React and the CSS-first Tailwind setup; the hosted runtime depends on this framework.
- Keep all editable owner and project content in src/data/content.js; this provides one content source for page and terminal.
- Keep the portfolio on the index route with smooth-scroll anchors; the owner explicitly requires one scrolling page.
- Use the lightweight portfolio Button and ActionLink controls, without a UI library; this follows the supplied brief.
- Send the contact form directly to VITE_CONTACT_ENDPOINT; the separately supplied endpoint owns message delivery and must allow the site's origin.
