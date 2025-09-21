import Link from "next/link";

type LogoHexProps = {
  size?: number;
  className?: string;
  Letter: string;
};

export default function LogoHex({
  size = 64,
  className = "",
  Letter = "S",
}: LogoHexProps) {
  return (
    <Link href="/" aria-label="Go to homepage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 84 96"
        width={size}
        height={size}
        className={`cursor-pointer text-cyan-500 ${className}`}
      >
        <title>Logo</title>
        <g transform="translate(-8.000000, -2.000000)">
          <g transform="translate(11.000000, 5.000000)">
            {/* Hexagon */}
            <polygon
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="39 0 0 22 0 67 39 90 78 68 78 23"
              fill="transparent"
            />

            {/* S inside */}
            <text
              x="40"
              y="70"
              textAnchor="middle"
              fontSize="64"
              fontFamily="sans-serif"
              fill="currentColor"
              fontWeight="bold"
            >
              {Letter}
            </text>
          </g>
        </g>
      </svg>
    </Link>
  );
}
