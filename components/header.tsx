import Link from "next/link"
import Image from "next/image"
import { Github, Package } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icon.png"
              alt="Rampage Trainer"
              width={28}
              height={28}
              className="opacity-90"
            />
            <span className="font-semibold tracking-tight">Rampage Trainer</span>
            <span aria-hidden className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">Red Dead Redemption 2</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link href="https://github.com/rampage-trainer/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Badge variant="secondary" className="gap-1">
              <Github className="size-3.5" /> GitHub
            </Badge>
          </Link>
          <Link href="https://www.nexusmods.com/reddeadredemption2/mods/233" target="_blank" rel="noreferrer" aria-label="NexusMods">
            <Badge variant="secondary" className="gap-1">
              <Package className="size-3.5" /> NexusMods
            </Badge>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}


