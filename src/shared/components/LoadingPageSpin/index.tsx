import React from 'react';
import { Spin } from 'antd';
import { useNProgress } from '@tanem/react-nprogress';
import { LoadingPageSpinWrapper } from './style';

interface ContainerProps {
  animationDuration: number;
  isFinished: boolean;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ animationDuration, children, isFinished }: ContainerProps) => (
  <div
    style={{
      opacity: isFinished ? 0 : 1,
      pointerEvents: 'none',
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);

interface BarProps {
  animationDuration: number;
  progress: number;
}

const Bar: React.FC<BarProps> = ({ animationDuration, progress }: BarProps) => (
  <div
    style={{
      background: '#1677ff',
      height: 2,
      left: 0,
      marginLeft: `${(-1 + progress) * 100}%`,
      position: 'fixed',
      top: 0,
      transition: `margin-left ${animationDuration}ms linear`,
      width: '100%',
      zIndex: 1031,
    }}
  >
    <div
      style={{
        boxShadow: '0 0 10px #1677ff, 0 0 5px #29d',
        display: 'block',
        height: '100%',
        opacity: 1,
        position: 'absolute',
        right: 0,
        transform: 'rotate(3deg) translate(0px, -4px)',
        width: 100,
      }}
    />
  </div>
);

interface LoadingProps {
  isAnimating: boolean;
}

const LoadingPageSpin: React.FC<LoadingProps> = ({ isAnimating }: LoadingProps) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
};

export default LoadingPageSpin;
