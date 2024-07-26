/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3LiDNjZWpUo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Label from "./components/ui/label"
import Button from "./components/ui/button"

export default function Component() {
  return (
      <div className="flex min-h-screen">
        <div className="bg-black w-60 flex flex-col items-center py-5 gap-4">
          <nav className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4">
              <br/>
              <div>
                {/* @ts-ignore */}
                <Link href="/Browse" prefetch={false}>
                  <div className="text-white font-semibold">Browse Files</div>
                </Link>
              </div>
              <div>
                <Link href="#" prefetch={false}>
                  <div className="text-white font-semibold">Photo Gallery</div>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center h-screen bg-background flex-1">
          <h1 className="text-4xl font-bold text-card-foreground translate-y-[-60px]">NAS File Storage System Ver. 1</h1>
          <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-card-foreground">Upload a File</h1>
            <form className="space-y-4">
              <div>
                <Label htmlFor="file" className="mt-2 text-sm text-muted-foreground">
                  Select a file
                </Label>
                <div className="flex items-center justify-center w-full">
                  <label
                      htmlFor="file"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-input rounded-lg cursor-pointer bg-muted hover:bg-gray-300 transition-colors"
                  >
                    <p className="mt-2 text-sm text-muted-foreground">Drag and drop a file or click to upload</p>
                    <input id="file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <Button type="submit" className="w-full mt-2 text-sm text-muted-foreground px-4 py-2 bg-muted text-gray-800 rounded hover:bg-gray-300 transition-colors font-ibm-plex-mono">
                Upload File
              </Button>
            </form>
          </div>
        </div>
      </div>
  )
}