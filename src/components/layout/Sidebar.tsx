import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BookOpen, Briefcase, Users, Mail, Calendar } from "lucide-react";
import { EXTERNAL_LINKS, CTA_TEXT } from "../../constants";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/about", icon: <BookOpen size={18} /> },
    { name: "Portfolio", path: "/portfolio", icon: <Briefcase size={18} /> },
    { name: "Team", path: "/team", icon: <Users size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <aside className="hidden md:block md:w-64 lg:w-72 p-4 border-r border-border">
      <div className="sticky top-20">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-nav-item ${isActive ? "active" : ""}`
              }
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 p-4 bg-bg-secondary border border-border rounded-md">
          <h3 className="text-sm font-medium mb-2">
            Ready to launch your MVP?
          </h3>
          <p className="text-text-secondary text-sm mb-4">
            In our 30-min intro call, we'll discuss your project needs,
            technical requirements, and provide a roadmap for your MVP
            development. <br /> <br />
            No commitment, just clarity.
          </p>
          <a
            href={EXTERNAL_LINKS.CALENDAR}
            target="_blank"
            rel="noreferrer"
            className="gh-btn gh-btn-primary w-full flex items-center justify-center"
          >
            <Calendar size={16} className="mr-2" />
            {CTA_TEXT.BOOK_CALL}
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
