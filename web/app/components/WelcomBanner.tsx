type WelcomeBannerProps = {
  name: string; 
};

export default function WelcomeBanner({ name }: WelcomeBannerProps) {
  return (
    <div className="p-6 bg-blue-100 rounded mb-4">
      <h1 className="text-2xl font-bold">Welcome, {name}!</h1>
      <p>Here is your dashboard overview.</p>
    </div>
  );
}
