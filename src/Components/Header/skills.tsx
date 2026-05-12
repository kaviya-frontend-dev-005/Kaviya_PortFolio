const SkillCategory = ({
  title,
  tags,
  learning,
}: {
  title: string;
  tags: string[];
  learning?: boolean;
}) => {
  return (
    <div className="bg-card border border-white/[0.07] rounded-2xl p-8 transition-all duration-200 hover:border-accent hover:-translate-y-1 cursor-default">
      <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-5">
        {title}
      </p>
      <div className="flex flex-wrap gap-2.5">
        {tags.map((tag) =>
          learning ? (
            <span
              key={tag}
              className="bg-accent2/[0.08] border border-accent2/30 text-accent2 text-[0.82rem] px-3.5 py-1.5 rounded-md font-medium"
            >
              {tag}
            </span>
          ) : (
            <span
              key={tag}
              className="bg-white/5 border border-white/[0.07] text-[#f0eff4] text-[0.82rem] px-3.5 py-1.5 rounded-md font-medium transition-colors duration-200 hover:bg-accent/10 hover:border-accent/40 cursor-default"
            >
              {tag}
            </span>
          ),
        )}
      </div>
    </div>
  );
};

export default SkillCategory;
