import {Facebook, Instagram, Phone, Search} from "lucide-react";
import styles from "src/components/Icon/Icon.module.scss";

const icons = {
  search: Search,
  phone: Phone,
  facebook: Facebook,
  instagram: Instagram,
};

type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({name, className = ""}: IconProps) {
  const IconComponent = icons[name];

  if (!IconComponent) {

    return null;
  }

  return <IconComponent className={`${styles.icon} ${className}`} />;
}
