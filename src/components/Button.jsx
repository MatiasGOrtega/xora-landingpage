import clsx from "clsx";
import Marker from "./Marker";

function Button({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) {
  return href ? (
    <a
      className={clsx(
        "g5 group relative rounded-2xl p-0.5 shadow-500",
        containerClassName,
      )}
    >
      <span className="g4 inner-before relative flex min-h-[60px] items-center overflow-hidden rounded-2xl px-4 group-hover:before:opacity-100">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="z-20 mr-5 size-10 object-contain"
          />
        )}
        <span className="base-bold relative z-2 font-poppins uppercase text-p1">
          {children}
        </span>
        <span className="glow-before glow-after" />
      </span>
    </a>
  ) : (
    <button
      className={clsx("g5 group relative rounded-2xl p-0.5 shadow-500")}
      onClick={onClick}
    >
      <span className="g4 inner-before relative flex min-h-[60px] items-center overflow-hidden rounded-2xl px-4 group-hover:before:opacity-100">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="z-20 mr-5 size-10 object-contain"
          />
        )}
        <span className="base-bold relative z-2 font-poppins uppercase text-p1">
          {children}
        </span>
        <span className="glow-before glow-after" />
      </span>
    </button>
  );
}

export default Button;
