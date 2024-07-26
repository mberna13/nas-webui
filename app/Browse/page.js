export default function BrowsePage() {
    return (
        <div dangerouslySetInnerHTML={{
            __html: `
            <div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
              <header class="mb-8">
                <h1 class="text-3xl font-bold tracking-tight text-foreground">Photo Gallery</h1>
              </header>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div class="bg-background rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Photo 1"
                    width="600"
                    height="400"
                    class="w-full h-48 object-cover"
                    style="aspect-ratio: 600 / 400; object-fit: cover;"
                  />
                  <div class="p-4">
                    <h3 class="text-lg font-semibold text-foreground">Photo 1</h3>
                  </div>
                </div>
                <div class="bg-background rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Photo 2"
                    width="600"
                    height="400"
                    class="w-full h-48 object-cover"
                    style="aspect-ratio: 600 / 400; object-fit: cover;"
                  />
                  <div class="p-4">
                    <h3 class="text-lg font-semibold text-foreground">Photo 2</h3>
                  </div>
                </div>
                <div class="bg-background rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Photo 3"
                    width="600"
                    height="400"
                    style="aspect-ratio: 600 / 400; object-fit: cover;"
                    class="w-full h-48 object-cover"
                  />
                  <div class="p-4">
                    <h3 class="text-lg font-semibold text-foreground">Photo 3</h3>
                  </div>
                </div>
                <div class="bg-background rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Photo 4"
                    width="600"
                    height="400"
                    class="w-full h-48 object-cover"
                    style="aspect-ratio: 600 / 400; object-fit: cover;"
                  />
                  <div class="p-4">
                    <h3 class="text-lg font-semibold text-foreground">Photo 4</h3>
                  </div>
                </div>
                <div class="bg-background rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Photo 5"
                    width="600"
                    height="400"
                    class="w-full h-48 object-cover"
                    style="aspect-ratio: 600 / 400; object-fit: cover;"
                  />
                  <div class="p-4">
                    <h3 class="text-lg font-semibold text-foreground">Photo 5</h3>
                  </div>
                </div>
                <div class="bg-background rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Photo 6"
                    width="600"
                    height="400"
                    class="w-full h-48 object-cover"
                    style="aspect-ratio: 600 / 400; object-fit: cover;"
                  />
                  <div class="p-4">
                    <h3 class="text-lg font-semibold text-foreground">Photo 6</h3>
                  </div>
                </div>
                <div class="bg-background rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Photo 7"
                    width="600"
                    height="400"
                    class="w-full h-48 object-cover"
                    style="aspect-ratio: 600 / 400; object-fit: cover;"
                  />
                  <div class="p-4">
                    <h3 class="text-lg font-semibold text-foreground">Photo 7</h3>
                  </div>
                </div>
                <div class="bg-background rounded-lg overflow-hidden shadow-lg">
                  <img src="/placeholder.svg" />
                </div>
              </div>
            </div>
    `
        }}/>
    )
}