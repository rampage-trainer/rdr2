import Link from "next/link"
import { Wrench, Download, ShieldCheck } from "lucide-react"
import changelogs from "@/data/changelogs.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/image-carousel"

type ChangelogsMap = Record<string, string[]>

function loadLatestChangelogItems(): string[] {
  const map = changelogs as ChangelogsMap
  const versions = Object.keys(map)
  if (versions.length === 0) return []
  const latest = versions.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))[0]
  return map[latest] ?? []
}

export default function Home() {
  const changelogItems = loadLatestChangelogItems()

  const trainerImages = [
    {
      src: "/trainer.png",
      alt: "Rampage Trainer logo"
    },
    {
      src: "/trainer_nui.png",
      alt: "Rampage Trainer NUI logo"
    }
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <section className="grid gap-10 md:grid-cols-2 md:gap-14 items-start">
        <div className="space-y-6">
          <div className="pt-2">
            <ImageCarousel
              images={trainerImages}
              className="opacity-90"
              priority
            />
          </div>
          {/** Intentionally no text/buttons here; moved to the right column below the supported builds card. */}
        </div>
        <div className="self-start mt-6 md:mt-10 flex flex-col gap-6">
          <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="size-4" /> Supported Gamebuilds
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">RDR2</div>
                  <div className="text-muted-foreground">Build 1.0.1491.50</div>
                </div>
                <Badge className="bg-emerald-600 hover:bg-emerald-600">Supported</Badge>
              </div>
            </div>
          </CardContent>
          </Card>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground max-w-prose">
              Modern trainer with a minimal UI. Download beta builds, read changelogs, and follow install instructions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://github.com/rampage-trainer/rdr2/releases/latest/download/Rampage.zip"
                className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90"
              >
                <Download className="size-4" /> Download Stable
              </Link>
              <Link
                href=""
                className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90"
              >
                <Download className="size-4" /> Download Beta
              </Link>
              <Link
                href="https://github.com/rampage-trainer/rdr2/releases/latest/download/RampageNUI.zip"
                className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90"
              >
                <Download className="size-4" /> Download NUI
              </Link>
              <Link
                href="#install"
                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                <Wrench className="size-4" /> Install Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="grid gap-10 md:grid-cols-2 items-start">
        <div id="install" className="grid gap-6 max-w-prose w-full">
          <h2 className="text-xl font-semibold tracking-tight">Install Instructions</h2>
          <ol className="list-decimal list-outside pl-5 space-y-2 text-sm">
            <li>Make sure you have the latest version of <code>ScriptHookRDR2</code> with .asi loader</li>
            <li>Download the ZIP File</li>
            <li>Extract the ZIP File</li>
            <li>
              Copy <code>RampageFiles</code> and <code>Rampage.asi</code> into your Game Directory
            </li>
          </ol>
          <p className="text-xs text-muted-foreground">
            It’s important to always merge the new RampageFiles with your current one when using beta versions.
          </p>
        </div>

        <div id="changelog" className="grid gap-6">
          <h2 className="text-xl font-semibold tracking-tight">Changelog</h2>
          <ul className="space-y-2 text-sm leading-relaxed list-disc pl-5">
            {changelogItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
