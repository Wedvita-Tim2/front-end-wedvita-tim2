import Button from "../elements/Buttons";

const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <p className="text-3xl md:text-5xl font-bold text-light-pink">
          404 Page Not Found
        </p>
        <p className="text-lg md:text-2xl text-primary-200 text-center">Sepertinya Anda Tersesat</p>
        <Button type={'link'} href={'/'} isGradient>Kembali Ke Home</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
