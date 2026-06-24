import Image from "next/image"

export default function GithubLogo({ size = 20 }: { size?: number }) {
  return (
    <Image
      src="/social/github-icon.png"
      alt="Github Icon"
      width={size}
      height={size}
      className="rounded-full"
    />
  )
}
