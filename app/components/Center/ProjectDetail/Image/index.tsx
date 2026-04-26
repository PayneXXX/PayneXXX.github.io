import { TransitionImage } from "@/components/TransitionImage";
import { useViewTransitionState } from "react-router";
import type { Project } from "@/types";

type ImageProps = {
  project: Project;
  slug: string;
};

export default function Image({ project, slug }: ImageProps) {
  const isProjectTransitioning = useViewTransitionState(`/${slug}`);
  const transitionName = isProjectTransitioning
    ? `project-cover-${slug}`
    : "none";

  return (
    <div className="p-4">
      <TransitionImage
        transitionName={transitionName}
        src={project.cover}
        alt={project.name}
      />
    </div>
  );
}
