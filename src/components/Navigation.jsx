import ProfilePicture from "./ProfilePicture";


export default function Navigation() {
  return (
    <nav className="flex items-center py-4 border-b border-white/10">
      <div className="flex items-center gap-2">
        <ProfilePicture />
        <div className="text-xl text-zinc-50 whitespace-nowrap">Dev Ken</div>
      </div>
    </nav>
  );
}
