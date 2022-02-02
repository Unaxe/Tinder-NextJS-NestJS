
export default function Home() {
  return (
    <div className="h-screen w-screen bg-pink-300 flex flex-col">
      <div className="bg-white m-auto h-full sm:h-5/6 sm:rounded-lg flex flex-col w-full sm:w-80 shadow-md pt-2 pb-2 px-2 justify-between"> 
        <div className="flex flex-col h-auto items-center gap-1">
          <p className="h-96 sm:h-80">
            <img src="https://thispersondoesnotexist.com/image" alt="avatar" className="w-full h-96 sm:h-80 rounded-md object-cover" />
          </p>
          <div className="px-1 h-auto bg-gray-100 flex flex-col gap-2">
            <div>
              <h3 className="text-md font-bold">John DOE, 22</h3>
              <div className="text-xs text-gray-600">Etudiant en deuxième année à l'Efrei</div>
            </div>
            <div className="text-gray-600 text-sm max-h-16 overflow-y-scroll">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam labore ut pariatur iste ratione saepe accusamus enim at voluptatem amet sit doloremque corporis, laboriosam unde.
            </div>
          </div>
        </div>
        <div className="mx-auto flex gap-2 items-center">
          <button className="h-16 w-16 rounded-full shadow-lg flex flex-col items-center bg-red-400">
            <i className="ri-close-fill text-4xl font-bold my-auto text-white "></i>
          </button>
          <button className="h-16 w-16 rounded-full shadow-lg flex flex-col items-center bg-blue-400">
            <i className="ri-align-justify text-3xl my-auto text-white"></i>
          </button>
          <button className="h-16 w-16 rounded-full shadow-lg flex flex-col items-center bg-green-400">
            <i className="ri-heart-3-fill text-3xl my-auto text-white"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
