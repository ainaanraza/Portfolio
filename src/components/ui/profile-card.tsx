import React, { useState } from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type SocialLink = {
  id: string;
  icon: React.ElementType;
  label: string;
  href: string;
};

type ProfileCardProps = {
  avatarUrl: string;
  name: string;
  title: string;
  bio: string;
  socialLinks?: SocialLink[];
  actionButton?: { text: string; href: string };
};

// Glassmorphism profile card, themed for the cosmic red/black design system.
export const GlassmorphismProfileCard = ({
  avatarUrl,
  name,
  title,
  bio,
  socialLinks = [],
  actionButton,
}: ProfileCardProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full rounded-3xl p-[1px] overflow-hidden"
      >
        {/* rotating conic border */}
        <motion.div
          aria-hidden
          className="absolute -inset-[100%] opacity-60"
          style={{ background: "conic-gradient(from 0deg, transparent 0 70%, var(--color-cosmic-red) 85%, transparent 100%)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div
          className="relative flex flex-col items-center p-8 rounded-3xl backdrop-blur-xl bg-black/90 border border-white/5"
          style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)" }}
        >
        <div className="w-24 h-24 mb-4 rounded-full p-1 border-2 border-white/20">
          <img
            src={avatarUrl}
            alt={`${name}'s profile`}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-white font-display">{name}</h2>
        <p className="mt-1 text-sm font-medium text-cosmic-red">{title}</p>
        <p className="mt-4 text-center text-sm leading-relaxed text-gray-400">{bio}</p>

        <div className="w-1/2 h-px my-6 rounded-full bg-white/10" />

        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((item) => (
            <SocialButton
              key={item.id}
              item={item}
              setHoveredItem={setHoveredItem}
              hoveredItem={hoveredItem}
            />
          ))}
        </div>

        {actionButton && <ActionButton action={actionButton} />}
        </div>
      </motion.div>

      <div className="absolute inset-0 rounded-3xl -z-10 transition-all duration-500 ease-out blur-2xl opacity-30 bg-gradient-to-r from-cosmic-red/50 to-cosmic-dark-red/50" />
    </div>
  );
};

const SocialButton = ({
  item,
  setHoveredItem,
  hoveredItem,
}: {
  item: SocialLink;
  setHoveredItem: (id: string | null) => void;
  hoveredItem: string | null;
}) => (
  <div className="relative">
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-out overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10"
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      aria-label={item.label}
    >
      <div className="relative z-10 flex items-center justify-center">
        <item.icon
          size={20}
          className="transition-all duration-200 ease-out text-gray-400 group-hover:text-white"
        />
      </div>
    </a>
    <Tooltip item={item} hoveredItem={hoveredItem} />
  </div>
);

const ActionButton = ({ action }: { action: { text: string; href: string } }) => (
  <a
    href={action.href}
    target={action.href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    className="group flex items-center gap-2 px-6 py-3 mt-8 rounded-full font-semibold text-base backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] active:scale-95 bg-gradient-to-r from-cosmic-red to-cosmic-dark-red text-white"
    style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
  >
    <span>{action.text}</span>
    <ArrowUpRight
      size={16}
      className="transition-transform duration-300 ease-out group-hover:rotate-45"
    />
  </a>
);

const Tooltip = ({
  item,
  hoveredItem,
}: {
  item: SocialLink;
  hoveredItem: string | null;
}) => (
  <div
    role="tooltip"
    className={`absolute -top-12 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg backdrop-blur-md border text-xs font-medium whitespace-nowrap transition-all duration-300 ease-out pointer-events-none bg-cosmic-bg text-white border-white/15 ${
      hoveredItem === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
    }`}
    style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
  >
    {item.label}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-cosmic-bg border-b border-r border-white/15" />
  </div>
);

export default GlassmorphismProfileCard;
