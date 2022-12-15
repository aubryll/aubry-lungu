import * as React from "react"
import { SVGProps } from "react"

const Logo = ({color = "#4b91f1", ...props}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="37.971 17.868 98.03 87.826"
    width={98.03}
    height={87.826}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M86.986 17.868c-27.07 0-49.015 19.661-49.015 43.913 0 24.253 21.945 43.913 49.015 43.913s49.015-19.66 49.015-43.913c0-24.252-21.945-43.913-49.015-43.913Zm24.833 62.993c-32.125 19.166-60.851-.667-66.379-6.454 14.492 11.331 37.288 14.851 56.379 6.787 11.313-5.376 17.339-12.658 20.167-22.334 2.829-10.751-.536-20.965-11.143-27.954-9.899-6.451-22.628-8.601-35.355-5.376-9.899 3.226-17.678 9.139-20.506 17.74-3.535 9.139 2.829 18.277 13.435 23.115 10.606 3.763 25.456 2.15 31.113-6.45 3.535-5.914 2.121-13.44-5.657-17.203-3.535-1.613-8.303-1.955-10.86.174-3.521 2.932 1.89.361 5.874 2.206 2.517 1.165 5.6 3.165 4.986 8.372-.772 6.559-11.313 9.677-18.385 7.526-7.778-2.688-11.314-8.601-10.606-14.515 1.414-6.451 7.778-11.289 15.557-12.902 13.435-2.688 25.455 4.301 29.698 13.978 3.535 9.138-2.121 17.739-12.021 23.115-8.484 4.301-18.385 5.376-27.577 2.688-13.435-3.763-22.627-12.901-23.334-24.19-.708-14.515 12.019-25.266 29.697-29.029 19.799-3.225 39.598 4.301 48.083 18.277 7.778 14.515 3.61 32.42-13.166 42.429Z"
      fill={color}
      data-fill-palette-color="accent"
      style={{
        strokeWidth: 0,
      }}
    />
  </svg>
)

export default Logo;
