import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      testimonial:
        "The surveys are insightful and easy to participate in. I feel my opinions are valued!",
    },
    {
      id: 2,
      avatar:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
      testimonial:
        "I appreciate the variety of topics covered in the surveys. It keeps the experience interesting and relevant.",
    },
    {
      id: 3,
      avatar:
        "https://miro.medium.com/v2/resize:fit:525/1*lyyXmbeoK5JiIBNCnzzjjg.png",
      testimonial:
        "Exceptional surveys! The thoughtfulness in the questions really enhances the survey experience.",
    },
  ];
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          What Our Participants Say
        </h2>
        <hr />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
              <img
                  src={testimonial.avatar}
                  alt={`Avatar ${testimonial.id}`}
                  className="w-auto h-24 rounded-full mx-auto mb-4"
                />
                <CardContent>
                <p className="text-gray-700 text-sm font-bold text-center">{testimonial.testimonial}</p>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
