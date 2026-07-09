import Image from "next/image"

export default function GithubLogo({ size = 20 }: { size?: number }) {
  return (
    <Image
      src="/social/globe.svg"
      alt="Globe Icon"
      width={20}
      height={20}
      className="rounded-full"
    />
  )
}
