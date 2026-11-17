# geetanshgoyal.in

This is the repository for my 3D developer portfolio website <a href="https://geetanshgoyal.in/"><samp>geetanshgoyal.in</samp></a> 🚀. It features an interactive 3D room with a computer workstation whose CRT runs GeetOS - a desktop with a dock, draggable windows and a terminal, built for the screen it lives on. Thanks for taking the time to check this out. If you have any questions or comments, feel free to shoot me an email at <samp><a href="mailto:goyalgeetansh@gmail.com">goyalgeetansh@gmail.com</a></samp> or connect with me on GitHub/LinkedIn!

## Using the site

Click once to move to the desk, then move the pointer over the monitor to zoom into the screen. Move it off the screen to pull back out.

Inside GeetOS:

| Key / action | What it does |
| --- | --- |
| `Space` | Open search (apps and projects) |
| Dock / desktop icons | Open an app; click a dock icon again to minimise |
| Traffic lights | Close, minimise, zoom; double-click a title bar to zoom |
| `Esc` | Close search, or the front window |
| Terminal | `help`, `projects`, `open morph`, `neofetch`, `wallpaper sunset` |

Windows tile automatically: the focused window takes the master column, the rest stack beside it. Four fit per workspace. The terminal supports command history (`↑`/`↓`) and tab completion - start with `help`.

## Development

```bash
# Install dependencies
npm i

# Run the local dev server
npm run dev
```

To serve a production build:

```bash
# Build for production
npm run build

# Serve the build using express
npm start
```

## Layout

| Path | What lives there |
| --- | --- |
| `src/Application/` | The Three.js scene: camera keyframes, world objects, audio, resource loading |
| `src/Application/UI/` | React overlay - BIOS loading screen, info overlay, mute and free-cam toggles |
| `src/Application/World/MonitorScreen.ts` | Renders `static/desktop.html` onto the CRT via `CSS3DRenderer` and bridges its events back to the scene |
| `static/desktop.html` | GeetOS itself - self-contained, no build step |
| `api/send-email.js` | Vercel serverless function behind the contact form |

### How the screen talks to the room

`static/desktop.html` runs inside an iframe, so events raised in it never reach the parent document on their own. It forwards every pointer and key event up with `postMessage`, and `MonitorScreen.ts` re-dispatches them on the iframe element with an `inComputer` flag. That flag is what drives the camera zoom, the mouse-click sounds and the keyboard clatter - if the forwarding is removed, the camera can no longer enter or leave the monitor.

## Credits

The 3D room, scene engine and models are derived from [Henry Heffernan's portfolio](https://github.com/henryheffernan/henryheffernan.com) (MIT).
