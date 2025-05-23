// RouteTransition.jsx
import { motion, AnimatePresence } from "framer-motion";

export default function RouteTransition() {
  return (
    <AnimatePresence>
      <motion.div
        key="route-transition"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 128, 0, 0.3)",
          zIndex: 9999,
          pointerEvents: "none", // para no bloquear clicks
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
}
