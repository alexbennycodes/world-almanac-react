export const InfoItem = ({ title, value, className }) => {
  return (
    <div className={`text-sm md:text-lg ${className}`}>
      <div className="flex items-center justify-between px-4 lg:px-16 py-1">
        <h3 className="font-bold capitalize">{title}</h3>
        <div className="uppercase">{value}</div>
      </div>
    </div>
  );
};
