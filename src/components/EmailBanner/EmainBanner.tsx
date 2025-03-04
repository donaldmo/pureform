import { Button, Image, Text, TextInput, Title } from '@mantine/core';
import image from './image.svg';
import classes from './EmailBanner.module.css';

export function EmailBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          We Are Coming Soon...
        </Title>

        <Text fw={500} fz="lg" mb={5}>

          Subscribe us to get notified!
        </Text>
        <Text fz="sm" c="dimmed">
          We are currently building our website! Leave your email and subscribe to be the first to know when we launch. 🚀
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div>
      </div>
      <Image src={image.src} className={classes.image} />
    </div>
  );
}