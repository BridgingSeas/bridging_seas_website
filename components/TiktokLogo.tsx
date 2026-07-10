import Image from "next/image"

export default function TiktokLogo() {
  return (
    <Image
      src="/social/tiktok_logo.png"
      alt="Tiktok Icon"
      width={22}
      height={22}
      className="rounded-full"
    />
  )
}
