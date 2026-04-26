import Experiences from "@/components/Center/Main/Experiences";
import Decks from "@/components/Center/Main/Decks";
import Introduce from "@/components/Center/Main/Introduce";
import Introduction from "@/components/Center/Main/Introduction";
import Knowledge from "@/components/Center/Main/Knowledge";
import Newsletter from "@/components/Center/Main/Newsletter";
import Now from "@/components/Center/Main/Now";
import Projects from "@/components/Center/Main/Projects";
import Resume from "@/components/Center/Main/Resume";
import SkillsTechnologies from "@/components/Center/Main/SkillsTechnologies";
import UserCard from "@/components/Center/Main/UserCard";
import SectionFrame from "@/components/Center/SectionFrame";
import { ScrollAnchorToc } from "@/components/ScrollAnchorToc";
import { useSiteContent } from "@/hooks/useSiteContent";

export default function Home() {
  const { home } = useSiteContent();

  return (
    <>
      <ScrollAnchorToc />

      <SectionFrame id="profile" tocLabel={home.profile.tocLabel} tocDepth={2}>
        <UserCard />
      </SectionFrame>

      <SectionFrame id="about" tocLabel={home.about.tocLabel} tocDepth={2}>
        <Introduce />
      </SectionFrame>

      <SectionFrame id="decks" tocLabel={home.decks.tocLabel} tocDepth={2}>
        <Decks />
      </SectionFrame>

      <SectionFrame
        id="projects"
        tocLabel={home.projects.tocLabel}
        tocDepth={2}
      >
        <Projects />
      </SectionFrame>

      <SectionFrame
        id="experiences"
        tocLabel={home.experiences.tocLabel}
        tocDepth={3}
      >
        <Experiences />
      </SectionFrame>

      <SectionFrame
        id="knowledge"
        tocLabel={home.knowledge.tocLabel}
        tocDepth={2}
      >
        <Knowledge />
      </SectionFrame>

      <SectionFrame id="skills" tocLabel={home.skills.tocLabel} tocDepth={3}>
        <SkillsTechnologies />
      </SectionFrame>

      <SectionFrame id="now" tocLabel={home.now.tocLabel} tocDepth={2}>
        <Now />
      </SectionFrame>

      <SectionFrame id="resume" tocLabel={home.resume.tocLabel} tocDepth={2}>
        <Resume />
      </SectionFrame>

      <SectionFrame
        id="newsletter"
        tocLabel={home.newsletter.tocLabel}
        tocDepth={3}
      >
        <Newsletter />
      </SectionFrame>

      <SectionFrame
        id="introduction"
        tocLabel={home.introduction.tocLabel}
        tocDepth={2}
      >
        <Introduction />
      </SectionFrame>
    </>
  );
}
