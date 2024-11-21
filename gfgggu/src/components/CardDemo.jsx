import { Card, Typography, Button } from "@material-tailwind/react";

export function CardDemo(props) {
  return (
    <Card className="max-w-xs">
    <div className="w-[178px] h-[180px] overflow-hidden">
    <img
        src={props.img}
        alt="image"
        className="w-full h-48 object-cover rounded-lg"
      />
    </div>
      

      <div className="p-4">
        <Typography variant="h6" color="blue-gray">
          {props.name}
        </Typography>

        <Typography color="gray" className="mt-2 text-sm">
          {props.role}
        </Typography>
      </div>

      <div className="p-4 pt-0">
        <Button fullWidth>Connect</Button>
      </div>
    </Card>
  );
}
