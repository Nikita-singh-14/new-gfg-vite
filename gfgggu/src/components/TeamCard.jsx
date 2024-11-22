import { Card, Typography, Button } from "@material-tailwind/react";

export function TeamCard(props) {
  return (
    <Card className="max-w-xs">
    <img
        src={props.img}
        alt="image"
        className="w-full h-48 object-cover rounded-lg"
      />
      

      <div className="p-4">
        <Typography variant="h6" color="blue-gray" className="text-center">
          {props.name}
        </Typography>
      </div>

      <div className="p-4 pt-0">
        <Button fullWidth>Meet</Button>
      </div>
    </Card>
  );
}
