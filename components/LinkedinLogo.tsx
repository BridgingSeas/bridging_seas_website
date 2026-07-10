import Image from "next/image"

export default function LinkedinLogo({
  size = 20,
  tone = "dark",
}: {
  size?: number
  tone?: "dark" | "pink"
}) {
  return (
    <Image
      src={tone === "pink" ? "/social/linkedin_logo_pink.png" : "/social/linkedin_logo.png"}
      alt="LinkedIn Icon"
      width={size}
      height={size}
    />
  )
}
