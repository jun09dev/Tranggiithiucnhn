import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutProps {
  imageUrl: string;
}

export function About({ imageUrl }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Về Tôi</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src={imageUrl}
              alt="Workspace"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Xin chào! Tôi là một Full Stack Developer với hơn 5 năm kinh nghiệm 
              trong việc phát triển ứng dụng web và mobile.
            </p>
            <p className="text-lg text-gray-700">
              Tôi có niềm đam mê mãnh liệt với việc tạo ra những sản phẩm công nghệ 
              có thể mang lại giá trị thực sự cho người dùng. Chuyên môn của tôi 
              bao gồm cả frontend và backend development, với khả năng làm việc 
              linh hoạt trên nhiều stack công nghệ khác nhau.
            </p>
            <p className="text-lg text-gray-700">
              Khi không coding, tôi thích tìm hiểu các công nghệ mới, đóng góp 
              cho cộng đồng open source và chia sẻ kiến thức thông qua các bài 
              viết kỹ thuật.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
