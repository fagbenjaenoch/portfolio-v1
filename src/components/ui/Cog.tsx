import type { SVGProps } from "react";

const SvgComponent = ({ width, height, ...props }: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		fill="currentColor"
		viewBox="0 0 200 200"
		{...props}
	>
		<g clipPath="url(#a)">
			<path
				fillRule="evenodd"
				d="M120 0H80v51.716L43.431 15.147 15.148 43.431 51.716 80H0v40h51.716l-36.569 36.568 28.285 28.285L80 148.284V200h40v-51.716l36.569 36.569 28.284-28.284L148.284 120H200V80h-51.716l36.569-36.569-28.284-28.284L120 51.716V0Z"
				clipRule="evenodd"
			/>
		</g>
	</svg>
);
export default SvgComponent;
