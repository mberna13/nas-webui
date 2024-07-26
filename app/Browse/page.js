export default function BrowsePage() {
    return (
        <div dangerouslySetInnerHTML={{
            __html: `
      <!--
// v0 by Vercel.
// https://v0.dev/t/06CPa9hULrU
-->

<div class="container mx-auto px-4 py-8">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-3xl font-bold">Media Gallery</h1>
    <div class="flex items-center gap-4"></div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
      <img
        src="/placeholder.svg"
        alt="Stunning Landscape"
        width="600"
        height="600"
        class="w-full h-64 object-cover transition-all duration-300 group-hover:scale-105"
        style="aspect-ratio: 600 / 600; object-fit: cover;"
      />
      <div class="p-4 bg-background">
        <h3 class="text-lg font-bold">Stunning Landscape</h3>
        <p class="text-sm text-muted-foreground">nature</p>
      </div>
    </div>
    <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
      <div class="relative w-full h-64">
        <span class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 rounded-md bg-muted"></span>
        <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-10 h-10 text-white"
          >
            <polygon points="6 3 20 12 6 21 6 3"></polygon>
          </svg>
        </div>
      </div>
      <div class="p-4 bg-background">
        <h3 class="text-lg font-bold">Majestic Waterfall</h3>
        <p class="text-sm text-muted-foreground">nature</p>
      </div>
    </div>
    <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
      <img
        src="/placeholder.svg"
        alt="Vibrant Cityscape"
        width="600"
        height="600"
        class="w-full h-64 object-cover transition-all duration-300 group-hover:scale-105"
        style="aspect-ratio: 600 / 600; object-fit: cover;"
      />
      <div class="p-4 bg-background">
        <h3 class="text-lg font-bold">Vibrant Cityscape</h3>
        <p class="text-sm text-muted-foreground">urban</p>
      </div>
    </div>
    <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
      <div class="relative w-full h-64">
        <span class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 rounded-md bg-muted"></span>
        <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-10 h-10 text-white"
          >
            <polygon points="6 3 20 12 6 21 6 3"></polygon>
          </svg>
        </div>
      </div>
      <div class="p-4 bg-background">
        <h3 class="text-lg font-bold">Adventurous Skydiving</h3>
        <p class="text-sm text-muted-foreground">adventure</p>
      </div>
    </div>
    <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
      <img
        src="/placeholder.svg"
        alt="Serene Beach"
        width="600"
        height="600"
        class="w-full h-64 object-cover transition-all duration-300 group-hover:scale-105"
        style="aspect-ratio: 600 / 600; object-fit: cover;"
      />
      <div class="p-4 bg-background">
        <h3 class="text-lg font-bold">Serene Beach</h3>
        <p class="text-sm text-muted-foreground">nature</p>
      </div>
    </div>
    <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
      <div class="relative w-full h-64">
        <span class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 rounded-md bg-muted"></span>
        <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-10 h-10 text-white"
          >
            <polygon points="6 3 20 12 6 21 6 3"></polygon>
          </svg>
        </div>
      </div>
      <div class="p-4 bg-background">
        <h3 class="text-lg font-bold">Rugged Offroad Adventure</h3>
        <p class="text-sm text-muted-foreground">adventure</p>
      </div>
    </div>
  </div>
</div>
    
    `
        }}/>
    )
}