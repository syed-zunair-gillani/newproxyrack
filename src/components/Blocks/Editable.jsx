import { Children, isValidElement, cloneElement } from 'react';

function Editable({ children, block, ...rest }) {
  const props = {
    'data-blok-c': undefined,
    'data-blok-uid': undefined,
    className: undefined,
  };

  if (block._editable) {
    const options = JSON.parse(
      block._editable.replace(/^<!--#storyblok#/, '').replace(/-->$/, '')
    );

    props['data-blok-c'] = JSON.stringify(options);
    props['data-blok-uid'] = `${options.id}-${options.uid}`;
    props['className'] = 'storyblok__outline';
  }

  const { className = '', ...otherProps } = props;

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            className: child.props.className
              ? `${child.props.className} ${className}`
              : className,
            ...otherProps,
            ...rest, // Include any other HTML attributes passed to Editable
          });
        }

        return child;
      })}
    </>
  );
}

export { Editable };
