import { Card, CardBody, Button, Image } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/context/AuthContext";

export const MusicPlayer = ({ className, image, name, artist, ...otherProps }) => {
    const [liked, setLiked] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    const handlePlayClick = () => {
        if (!user) {
            navigate('/login');
        } else {
            // Handle play functionality
        }
    };

    return (
        <Card
            isBlurred
            className={clsx("border-none bg-background/60 dark:bg-default-100/50", className)}
            shadow="sm"
            {...otherProps}
        >
            <CardBody>
                <div className="gap-6 md:gap-4 flex items-center">
                    <div className="relative col-span-6 md:col-span-4 min-h-72 w-56">
                        <Image
                            alt="Album cover"
                            className="object-cover mb-5"
                            classNames={{ base: "shadow-black/20" }}
                            height="90%"
                            shadow="lg"
                            src={image}
                            width="100%"
                        />
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-0">
                                <h3 className="font-semibold text-xl text-foreground/90">{name}</h3>
                                <p className="text-sm text-foreground/80">{artist}</p>
                            </div>
                            <div className="flex w-full items-center justify-center">
                                <Button
                                    isIconOnly
                                    className="w-auto h-auto data-[hover]:bg-foreground/10"
                                    radius="full"
                                    variant="light"
                                    onClick={handlePlayClick}
                                >
                                    <PlayIcon size={54} />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-start top-0">
                        <Button
                            isIconOnly
                            className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                            radius="full"
                            variant="light"
                            onPress={() => setLiked((v) => !v)}
                        >
                            <FavoriteBorderIcon
                                className={liked ? "[&>path]:stroke-transparent" : ""}
                                fill={liked ? "currentColor" : "none"}
                            />
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

function PlayIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    );
}