<template>
  <div class="font-sans min-h-screen">
    <div class="max-w-6xl mx-auto flex py-3">
      <div class="w-1/3 px-4 relative">
        <div class="border-bevel shadow-shadow text-brown-800 absolute top-0 left-0 right-0">
          <div class="bg-paper shadow-bevel p-4 text-center">
            <h1 class="text-2xl">
              Chapter
            </h1>
          </div>
        </div>
        <div class="px-4 pt-8">
          <div class="border-bevel">
            <div class="bg-gray-800 pt-16 px-4 pb-4">
              <div class="border-bevel mb-1">
                <div>
                  <meter class="w-full h-6 block appearance-none" min="0" max="24" value="24">
                    <div class="w-full bg-green-300 shadow-green text-center text-green-600">
                      Stamina - 24/24
                    </div>
                  </meter>
                </div>
              </div>
              <div class="border-bevel mb-1">
                <div>
                  <meter class="w-full h-6 block appearance-none" min="0" max="12" value="12">
                    <div class="w-full bg-orange-300 shadow-orange text-center text-orange-600">
                      Skill - 12/12
                    </div>
                  </meter>
                </div>
              </div>
              <div class="border-bevel mb-1">
                <div>
                  <meter class="w-full h-6 block appearance-none" min="0" max="12" value="12">
                    <div class="w-full bg-blue-300 shadow-blue text-center text-blue-600">
                      Luck - 12/12
                    </div>
                  </meter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/3 px-4">
        <div class="border-bevel shadow-shadow w-full text-brown-800">
          <div class="bg-paper shadow-bevel p-10 h-full">
            <p>Welcome adventurer,</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Story'
}
</script>
