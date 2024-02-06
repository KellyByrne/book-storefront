import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    onClick,
    ...rest
}) {

    const classes = className('px-3', 'py-1.5', 'border', 'rounded-lg', {
        'border-green-600 bg-green-600 text-white': primary,
        'border-green-600 bg-white text-green-600': secondary
    });

    return(
        <button {...rest} onClick={onClick} className={classes}>{children}</button>
    );
}

export default Button;