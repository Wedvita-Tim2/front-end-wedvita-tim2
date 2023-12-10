import Button from "../elements/Buttons";

const VerifivayionEmailPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <p className="text-3xl md:text-5xl font-bold text-center text-light-pink">
          Email Terverifikasi
        </p>
        <p className="text-lg md:text-2xl text-primary-200 text-center">Selamat anda berhasil bergabung bersama kami.</p>
        <Button type={'link'} href={'/login'} isGradient>Login</Button>
      </div>
    </div>
  );
};

export default VerifivayionEmailPage;
