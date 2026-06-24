import Image from "next/image"

export default function LinkedinLogo({ size = 20 }: { size?: number }) {
  return (
    <Image
      src="/social/linkedin_logo.png"
      alt="LinkedIn Icon"
      width={size}
      height={size}
      className="rounded-full"
    />
  )
}
