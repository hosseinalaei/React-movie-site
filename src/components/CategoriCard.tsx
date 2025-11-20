const CategoriCard = ({ title }: any) => {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
      <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
        {title}
      </h5>
    </div>
  );
};

export default CategoriCard;
