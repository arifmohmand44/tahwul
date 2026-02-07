export default function ProgressStatusGrid() {
  return (
    <div className="flex justify-between gap-4">
      {/* Col-1 */}
      <div className="flex-1 space-y-3">
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Digital Transformation
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold bg-green-600"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Digital Governance
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold ${i === 2 ? "bg-orange-400" : "bg-green-600"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Enterprise Architecture
          </p>

          {/* Bottom Badges */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold bg-green-600"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Col-2 */}
      <div className="flex-1 space-y-3">
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Digital Culture and Environment
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold ${i === 1 ? "bg-orange-400" : "bg-green-600"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Leadership Development
          </p>

          {/* Bottom Badges */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold bg-green-600"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Skills & Capacity Building
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold bg-orange-400"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Col-3 */}
      <div className="flex-1 space-y-3">
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
             w-[140px] h-[505px] p-3 
             flex flex-col"
        >
          {/* Title (Top) */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Business Processes
          </p>

          {/* Center Badges */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
          text-white font-semibold 
          ${i === 1 || i === 2 ? "bg-orange-400" : "bg-green-600"}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Col-4 */}
      <div className="flex-1 space-y-3">
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
             w-[140px] h-[247px] p-3 
             flex flex-col"
        >
          {/* Title (Top) */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Risk Management
          </p>

          {/* Center Badges */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
          text-white font-semibold bg-green-600`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
             w-[140px] h-[247px] p-3 
             flex flex-col"
        >
          {/* Title (Top) */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Business Continuity
          </p>

          {/* Center Badges */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${i === 1 || i === 2 || i === 5 ? "bg-gray-400" : "bg-green-600"}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Col-5 */}
      <div className="flex-1 space-y-3">
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Support Systems
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold ${i === 0 ? "bg-blue-600" : "bg-green-600"}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            IT Infrastructure
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold ${i === 4 ? "bg-blue-600" : "bg-green-600"}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Cloud Infrastructure
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold ${i === 2 ? "bg-blue-600" : "bg-green-600"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Col-6 */}
      <div className="flex-1 space-y-3">
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
             w-[140px] h-[505px] p-3 
             flex flex-col"
        >
          {/* Title (Top) */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Governance Platforms
          </p>

          {/* Center Badges */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold 
          ${i === 3 ? "bg-gray-400" : "bg-green-600"}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Col-7 */}
      <div className="flex-1 space-y-3">
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
             w-[140px] h-[247px] p-3 
             flex flex-col"
        >
          {/* Title (Top) */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Service Quality
          </p>

          {/* Center Badges */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
          text-white font-semibold bg-green-600`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
             w-[140px] h-[247px] p-3 
             flex flex-col"
        >
          {/* Title (Top) */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Digital Channels
          </p>

          {/* Center Badges */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold bg-green-600`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Col-8 */}
      <div className="flex-1 space-y-3">
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            User Engagement
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold ${i !== 0 ? "bg-orange-400" : "bg-green-600"}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            User Relationship
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold ${i !== 0 ? "bg-orange-400" : "bg-green-600"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            User Experience
          </p>

          {/* Bottom Badges */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold ${i === 1 || i === 3 ? "bg-orange-400" : "bg-green-600"}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Col-9 */}
      <div className="flex-1 space-y-3">
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Data Governance
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold ${i !== 0 ? "bg-orange-400" : "bg-green-600"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Data Usage & Availability
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold ${i !== 0 ? "bg-orange-400" : "bg-green-600"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        {/* Card */}
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-40 p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Open Data
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold ${i === 2 ? "bg-orange-400" : "bg-green-600"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Col-10 */}
      <div className="flex-1 space-y-3">
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
             w-[140px] h-[245px] p-3 
             flex flex-col"
        >
          {/* Title (Top) */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Innovation
          </p>

          {/* Center Badges */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
          text-white font-semibold bg-red-500`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="bg-gray-50 rounded-xl border-2 border-gray-200 
                w-[140px] h-[245px] p-3 
                flex flex-col justify-between"
        >
          {/* Top Text */}
          <p className="text-xs font-medium text-gray-700 text-center">
            Creative Solutions
          </p>

          {/* Bottom Badges */}
          <div className="flex gap-2 justify-center">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                   text-white font-semibold ${i === 0 ? "bg-orange-400" : "bg-red-500"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
