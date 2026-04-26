import {
  IconAppWindow,
  IconBook2,
  IconBrandGithub,
  IconBug,
  IconWorldPin,
} from "@tabler/icons-react";
import type { LinkType } from "@/types";

type LinkConfig = {
  icon: typeof IconWorldPin;
  order: number;
};

export const LINK_CONFIG: Record<LinkType, LinkConfig> = {
  github: {
    icon: IconBrandGithub,
    order: 1,
  },
  readme: {
    icon: IconBook2,
    order: 2,
  },
  issues: {
    icon: IconBug,
    order: 3,
  },
  demo: {
    icon: IconAppWindow,
    order: 4,
  },
  website: {
    icon: IconWorldPin,
    order: 5,
  },
};
