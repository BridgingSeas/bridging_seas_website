import Image from "next/image"

export default function GithubLogo({ size = 20 }: { size?: number }) {
  const renderSize = Math.round(size * 0.85)
  return (
    <Image
      src="/social/github-icon.png"
      alt="Github Icon"
      width={renderSize}
      height={renderSize}
      className="rounded-full"
    />
  )
}
