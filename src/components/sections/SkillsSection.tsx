import Section from "@components/page/Section";
import SvgParent from "@components/icons/SvgParent";

const skills = [
    {
        name: "HTML",
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                   viewBox="0 0 48 48">
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path fill="#FFF"
                  d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
            <path fill="#EEE"
                  d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
        </svg>
    },
    {
        name: "CSS",
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path fill="#FFF"
                  d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
            <path fill="#EEE"
                  d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
        </svg>
    },
    {
        name: "JavaScript",
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
            <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
            <path fill="#000001"
                  d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
        </svg>
    },
    {
        name: "TypeScript",
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
            <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
            <polygon fill="#fff"
                     points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon>
            <path fill="#fff"
                  d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
        </svg>
    },
    {
        name: "React",
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="-10 -10 100 100">
            <path fill="#8bb7f0"
                  d="M46.5,40c0,3.593-2.907,6.5-6.5,6.5s-6.5-2.907-6.5-6.5s2.907-6.5,6.5-6.5S46.5,36.407,46.5,40z"></path>
            <path fill="#4e7ab5"
                  d="M40,47c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S43.859,47,40,47z M40,34c-3.309,0-6,2.691-6,6 s2.691,6,6,6s6-2.691,6-6S43.309,34,40,34z"></path>
            <g>
                <path fill="#8bb7f0"
                      d="M24.474,75.503c-1.711,0-3.269-0.392-4.632-1.164c-2.28-1.293-3.856-3.521-4.686-6.62 c-0.965-3.607-0.85-8.398,0.332-13.878C5.956,50.562,0.5,45.531,0.5,40c0-5.532,5.455-10.562,14.987-13.84 c-1.182-5.481-1.298-10.272-0.333-13.879c0.83-3.1,2.406-5.328,4.685-6.62c1.362-0.772,2.921-1.164,4.632-1.164 c4.388,0,9.891,2.73,15.531,7.698c5.64-4.963,11.141-7.691,15.524-7.691c1.711,0,3.269,0.392,4.632,1.164 c2.277,1.291,3.854,3.515,4.684,6.611c0.966,3.606,0.85,8.398-0.333,13.88C74.043,29.437,79.5,34.468,79.5,40 s-5.457,10.563-14.991,13.842c1.182,5.481,1.298,10.272,0.332,13.878c-0.83,3.097-2.405,5.321-4.68,6.612 c-1.364,0.772-2.923,1.164-4.633,1.164c-4.386,0-9.889-2.728-15.527-7.689C34.361,72.774,28.859,75.503,24.474,75.503z M19.337,55.006c-0.991,4.717-1.102,8.747-0.316,11.679c0.542,2.026,1.481,3.431,2.794,4.175c0.753,0.427,1.648,0.644,2.659,0.644 c3.394,0,7.862-2.282,12.621-6.437c-2.385-2.402-4.713-5.121-6.928-8.091C26.336,56.56,22.696,55.898,19.337,55.006z M42.906,65.065c4.758,4.151,9.227,6.431,12.621,6.432c1.011,0,1.906-0.217,2.661-0.644c1.309-0.742,2.246-2.144,2.787-4.167 c0.786-2.934,0.676-6.963-0.315-11.679c-3.362,0.892-7.003,1.554-10.833,1.97C47.613,59.947,45.288,62.665,42.906,65.065z M35.566,57.393c1.452,1.776,2.938,3.433,4.434,4.94c1.492-1.506,2.979-3.163,4.43-4.94C42.939,57.464,41.454,57.5,40,57.5 C38.545,57.5,37.059,57.464,35.566,57.393z M32.349,53.179C34.844,53.392,37.417,53.5,40,53.5c2.585,0,5.155-0.108,7.646-0.32 c1.486-2.084,2.903-4.268,4.214-6.495c1.268-2.155,2.461-4.404,3.547-6.686c-1.083-2.276-2.275-4.524-3.546-6.684 c-1.308-2.222-2.725-4.406-4.215-6.495C45.157,26.608,42.587,26.5,40,26.5c-2.588,0-5.159,0.108-7.647,0.321 c-1.49,2.086-2.909,4.27-4.219,6.495c-1.27,2.159-2.462,4.407-3.546,6.686c1.082,2.274,2.274,4.522,3.545,6.684 C29.437,48.901,30.854,51.084,32.349,53.179z M57.491,44.779c-0.706,1.346-1.438,2.666-2.185,3.934 c-0.753,1.282-1.554,2.568-2.386,3.836c2.374-0.366,4.645-0.835,6.771-1.4C59.101,49.1,58.362,46.963,57.491,44.779z M20.304,51.148c2.127,0.564,4.397,1.034,6.768,1.4c-0.837-1.276-1.638-2.563-2.386-3.835c-0.745-1.267-1.478-2.585-2.183-3.931 C21.636,46.956,20.898,49.091,20.304,51.148z M59.816,40c1.528,3.391,2.773,6.743,3.708,9.977C70.926,47.373,75.5,43.574,75.5,40 s-4.574-7.373-11.976-9.977C62.591,33.257,61.345,36.609,59.816,40z M16.472,30.025C9.073,32.628,4.5,36.427,4.5,40 c0,3.574,4.573,7.373,11.974,9.976c0.934-3.235,2.179-6.587,3.705-9.974C18.652,36.614,17.407,33.262,16.472,30.025z M20.303,28.852c0.594,2.054,1.332,4.19,2.2,6.368c0.704-1.342,1.436-2.661,2.184-3.932c0.752-1.279,1.553-2.565,2.388-3.836 C24.701,27.817,22.431,28.287,20.303,28.852z M52.922,27.451c0.837,1.277,1.638,2.563,2.386,3.837 c0.746,1.267,1.479,2.586,2.185,3.932c0.869-2.177,1.607-4.313,2.201-6.369C57.564,28.286,55.294,27.816,52.922,27.451z M24.471,8.497c-1.011,0-1.905,0.216-2.657,0.644c-1.312,0.744-2.252,2.149-2.795,4.175c-0.785,2.935-0.675,6.964,0.317,11.679 c3.36-0.892,7.002-1.555,10.834-1.971c2.217-2.971,4.545-5.688,6.927-8.088C32.337,10.779,27.866,8.497,24.471,8.497z M49.828,23.023c3.83,0.416,7.471,1.078,10.833,1.97c0.992-4.716,1.103-8.746,0.316-11.68c-0.542-2.022-1.48-3.424-2.79-4.166 c-0.754-0.427-1.649-0.644-2.661-0.644c-3.393,0-7.86,2.281-12.619,6.433C45.287,17.335,47.613,20.053,49.828,23.023z M40,22.5 c1.454,0,2.939,0.036,4.431,0.107c-1.45-1.774-2.936-3.43-4.429-4.938c-1.497,1.51-2.982,3.166-4.432,4.938 C37.061,22.536,38.546,22.5,40,22.5z"></path>
                <path fill="#4e7ab5"
                      d="M24.471,4.997c4.494,0,9.996,2.91,15.532,7.867c5.535-4.953,11.034-7.86,15.524-7.86 c1.623,0,3.099,0.37,4.386,1.099c2.156,1.222,3.652,3.343,4.446,6.306c1.077,3.917,0.851,8.74-0.434,14.08 C73.147,29.57,79,34.431,79,40s-5.853,10.43-15.076,13.512c1.341,5.773,1.566,10.726,0.434,14.079 c-0.794,2.962-2.289,5.084-4.443,6.306C58.626,74.627,57.455,75,55.833,75c-0.001,0-0.416,0-0.417,0 c-4.492,0-9.882-2.91-15.416-7.861c-5.535,4.956-11.035,7.864-15.527,7.864c-1.623,0-3.099-0.37-4.386-1.099 c-2.158-1.225-3.655-3.349-4.448-6.314c-1.19-3.717-0.95-8.603,0.434-14.079C6.852,50.429,1,45.569,1,40 c0-5.568,5.852-10.429,15.072-13.511C15.385,23.43,14.946,20.59,14.931,18c-0.012-2.046,0.267-3.949,0.707-5.59 c0.794-2.966,2.29-5.09,4.448-6.314C21.372,5.366,22.848,4.997,24.471,4.997 M18.958,25.614c3.477-0.955,7.338-1.677,11.483-2.117 c2.382-3.21,4.875-6.096,7.386-8.584c-4.872-4.346-9.616-6.917-13.356-6.917c-1.099,0-2.075,0.238-2.904,0.709 c-1.433,0.813-2.452,2.32-3.031,4.481C17.678,16.388,17.873,20.716,18.958,25.614 M61.039,25.613 c1.085-4.898,1.28-9.227,0.422-12.429c-0.578-2.157-1.597-3.661-3.027-4.472c-0.83-0.471-1.809-0.709-2.907-0.709 c-3.737,0-8.478,2.568-13.349,6.91c2.51,2.488,5,5.374,7.38,8.583C53.701,23.936,57.562,24.658,61.039,25.613 M34.477,23.166 c1.802-0.107,3.609-0.2,5.488-0.2c1.879,0,3.755,0.094,5.557,0.2c-1.808-2.279-3.664-4.361-5.521-6.204 C38.144,18.805,36.287,20.887,34.477,23.166 M40,54c2.761,0,5.404-0.121,7.918-0.342c1.519-2.117,2.988-4.365,4.372-6.719 c1.353-2.299,2.577-4.626,3.67-6.939c-1.093-2.313-2.317-4.639-3.669-6.937c-1.385-2.355-2.853-4.602-4.373-6.719 C45.405,26.121,42.762,26,40,26s-5.406,0.121-7.92,0.343c-1.521,2.117-2.991,4.365-4.376,6.719 c-1.352,2.299-2.576,4.626-3.669,6.939c1.093,2.313,2.316,4.639,3.668,6.937c1.385,2.354,2.854,4.602,4.374,6.719 C34.592,53.879,37.237,54,40,54 M57.546,36.413c1.125-2.709,2.056-5.369,2.766-7.913c-2.553-0.702-5.373-1.282-8.428-1.707 c1.028,1.527,2.029,3.11,2.992,4.748C55.83,33.16,56.717,34.788,57.546,36.413 M22.449,36.414c0.828-1.625,1.716-3.253,2.668-4.873 c0.964-1.638,1.966-3.22,2.995-4.747c-3.055,0.424-5.875,1.005-8.428,1.707C20.394,31.045,21.325,33.704,22.449,36.414 M63.188,50.622C71.264,47.886,76,43.866,76,40s-4.736-7.886-12.812-10.622c-0.953,3.405-2.269,6.983-3.92,10.621 C60.919,43.638,62.235,47.216,63.188,50.622 M16.81,50.621c0.952-3.404,2.267-6.982,3.918-10.619 c-1.651-3.638-2.967-7.217-3.919-10.622C8.734,32.116,4,36.135,4,40C4,43.866,8.735,47.885,16.81,50.621 M51.884,53.207 c3.055-0.424,5.875-1.004,8.428-1.707c-0.711-2.544-1.642-5.204-2.766-7.914c-0.829,1.625-1.717,3.253-2.67,4.873 C53.913,50.097,52.912,51.68,51.884,53.207 M28.109,53.206c-1.028-1.527-2.029-3.109-2.993-4.746 c-0.952-1.619-1.839-3.246-2.667-4.87c-1.124,2.708-2.054,5.367-2.764,7.91C22.237,52.201,25.056,52.781,28.109,53.206 M24.474,72.003c3.739,0,8.481-2.57,13.352-6.914c-2.513-2.489-5.005-5.376-7.388-8.587c-4.143-0.439-8.002-1.161-11.478-2.116 c-1.084,4.898-1.279,9.226-0.422,12.428c0.578,2.16,1.598,3.667,3.03,4.48C22.396,71.765,23.375,72.003,24.474,72.003 M55.527,71.997L55.527,71.997c1.099,0,2.076-0.238,2.907-0.709c1.43-0.811,2.447-2.315,3.024-4.473 c0.858-3.203,0.663-7.531-0.421-12.428c-3.477,0.955-7.337,1.677-11.481,2.116c-2.38,3.21-4.871,6.096-7.381,8.585 C47.046,69.428,51.788,71.996,55.527,71.997 M40,63.04c1.857-1.844,3.713-3.927,5.522-6.206c-1.801,0.107-3.559,0.333-5.439,0.333 c-1.881,0-3.807-0.226-5.609-0.333C36.284,59.114,38.142,61.197,40,63.04 M24.116,4.072c-1.799,0-3.085,0.338-4.523,1.153 c-2.399,1.361-4.055,3.691-4.921,6.926c-0.96,3.587-0.877,8.302,0.236,13.681C5.419,29.189,0,34.325,0,40 c0,5.676,5.42,10.811,14.909,14.168c-1.113,5.379-1.196,10.094-0.235,13.681c0.865,3.233,2.52,5.563,4.921,6.926 c1.44,0.816,3.17,1.163,4.968,1.163c4.487,0,9.753-2.535,15.438-7.466c5.684,4.926,11.039,7.524,15.525,7.525 c1.799,0,3.441-0.413,4.881-1.229c2.397-1.359,4.051-3.686,4.916-6.917c0.961-3.588,0.878-8.303-0.235-13.681 C74.579,50.812,80,45.676,80,40s-5.42-10.812-14.911-14.169c1.114-5.38,1.196-10.095,0.235-13.682 c-0.866-3.231-2.521-5.558-4.919-6.917c-1.439-0.815-3.081-1.229-4.879-1.229c-4.485,0-9.839,2.599-15.524,7.527 c-5.686-4.932-11.066-7.461-15.554-7.461L24.116,4.072z M19.72,24.377c-0.462-2.324-0.772-4.502-0.789-6.412 c-0.015-1.72,0.221-3.217,0.57-4.521c0.507-1.892,1.368-3.194,2.559-3.87c0.676-0.384,1.5-0.644,2.423-0.644 c3.181,0,7.367,2.178,11.883,6.034c-2.221,2.273-4.392,4.819-6.466,7.585C26.315,22.949,22.897,23.562,19.72,24.377L19.72,24.377z M43.638,14.966c4.515-3.853,8.711-5.963,11.888-5.963c0.924,0,1.737,0.195,2.414,0.579c1.189,0.674,2.049,1.973,2.555,3.861 c0.874,2.818,0.761,6.564-0.218,10.933c-3.177-0.814-6.594-1.428-10.178-1.826C48.026,19.785,45.857,17.239,43.638,14.966 L43.638,14.966z M36.673,22.06c1.096-1.3,2.209-2.53,3.328-3.678c1.119,1.148,2.231,2.378,3.326,3.678 C42.208,22.02,41.095,22,40,22S37.793,22.02,36.673,22.06L36.673,22.06z M32.625,27.3c2.405-0.199,4.883-0.341,7.375-0.341 c2.491,0,4.969,0.142,7.373,0.341c1.432,2.019,2.796,4.126,4.056,6.269c1.222,2.078,2.373,4.239,3.423,6.43 c-1.051,2.192-2.202,4.354-3.424,6.432c-1.261,2.144-2.624,4.25-4.056,6.269c-2.403,0.199-4.881,0.466-7.372,0.466 c-2.493,0-4.972-0.268-7.378-0.467c-1.433-2.018-2.797-4.125-4.058-6.269c-1.222-2.077-2.372-4.238-3.422-6.43 c1.05-2.192,2.201-4.354,3.423-6.432C29.827,31.425,31.192,29.318,32.625,27.3L32.625,27.3z M57.422,34.024 c-0.549-1.018-1.112-2.018-1.683-2.99c-0.57-0.969-1.167-1.942-1.785-2.909c1.774,0.302,3.485,0.663,5.114,1.08 C58.601,30.771,58.05,32.383,57.422,34.024L57.422,34.024z M20.928,29.205c1.629-0.417,3.34-0.778,5.114-1.08 c-0.619,0.967-1.216,1.94-1.786,2.908c-0.571,0.972-1.134,1.972-1.683,2.99C21.945,32.384,21.395,30.772,20.928,29.205 L20.928,29.205z M60.365,39.999c1.415-3.162,2.587-6.292,3.49-9.326C70.758,33.192,75,36.721,75,40s-4.242,6.808-11.145,9.327 C62.951,46.292,61.78,43.161,60.365,39.999L60.365,39.999z M16.142,49.326C9.241,46.807,5,43.278,5,40s4.241-6.807,11.141-9.326 c0.903,3.035,2.074,6.165,3.489,9.327C18.216,43.162,17.045,46.292,16.142,49.326L16.142,49.326z M53.953,51.876 c0.618-0.968,1.216-1.941,1.785-2.909c0.572-0.972,1.135-1.973,1.684-2.991c0.628,1.641,1.178,3.254,1.646,4.821 C57.438,51.212,55.727,51.574,53.953,51.876L53.953,51.876z M20.929,50.795c0.467-1.566,1.017-3.177,1.644-4.816 c0.548,1.017,1.111,2.017,1.682,2.988c0.569,0.968,1.166,1.94,1.785,2.908C24.267,51.572,22.557,51.211,20.929,50.795 L20.929,50.795z M24.474,71.003c-0.924,0-1.736-0.195-2.413-0.579c-1.19-0.676-2.051-1.977-2.557-3.869 c-0.831-2.845-0.737-6.592,0.218-10.933c3.176,0.814,6.592,1.428,10.175,1.826c2.075,2.766,4.246,5.313,6.468,7.588 C31.85,68.893,27.653,71.004,24.474,71.003L24.474,71.003L24.474,71.003z M50.098,57.45c3.584-0.399,7.001-1.012,10.178-1.826 c1.105,4.74,1.192,8.518,0.217,10.932c-0.505,1.889-1.364,3.188-2.552,3.861c-0.678,0.384-1.49,0.579-2.413,0.579v1l-0.001-1 c-3.18,0-7.377-2.11-11.891-5.961C45.856,62.762,48.025,60.216,50.098,57.45L50.098,57.45z M40,61.62 c-1.12-1.148-2.234-2.379-3.33-3.68C37.79,57.98,38.904,58,40,58c1.095,0,2.208-0.02,3.327-0.06 C42.232,59.241,41.119,60.472,40,61.62L40,61.62z"></path>
            </g>
        </svg>
    },
    {
        name: "Next.js",
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
            <path fill="#212121"
                  d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"></path>
        </svg>
    },
    {
        name: "Django",
        icon: <svg className="text-[#0C4B33]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                   viewBox="0 0 24 24">
            <path
                d="M 11 3 L 11 8.1582031 C 10.653 8.0172031 9.9041562 8 9.5351562 8 C 6.7591563 8 4.1894531 9.306 4.1894531 13 C 4.1894531 17.42 7.67 18 10 18 C 10.92 18 13 17.909141 14 17.619141 L 14 3 L 11 3 z M 16 3 L 16 6 L 19 6 L 19 3 L 16 3 z M 16 8 L 16 16.701172 C 16 18.217172 15.078 19.795172 13 20.701172 L 15.859375 21.996094 C 18.765375 20.996094 19 17.701172 19 16.701172 L 19 8 L 16 8 z M 9.9707031 10.550781 C 10.290703 10.550781 10.65 10.609453 11 10.689453 L 11 15.392578 C 10.65 15.472578 10.290703 15.533203 9.9707031 15.533203 C 8.6607031 15.533203 7.390625 15.12 7.390625 13 C 7.390625 10.88 8.6607031 10.550781 9.9707031 10.550781 z"></path>
        </svg>
    },
    {
        name: "Unity",
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="-2.5 -2.5 55 55">
            <path
                d="M 40.449219 3 C 40.359375 2.996094 40.265625 3.007813 40.175781 3.03125 L 23.765625 7.03125 C 23.449219 7.105469 23.191406 7.328125 23.074219 7.628906 L 21.324219 12 L 16 12 C 15.722656 12 15.453125 12.117188 15.265625 12.324219 L 3.265625 25.324219 C 2.894531 25.722656 2.914063 26.347656 3.3125 26.722656 L 15.890625 38.722656 C 16.078125 38.902344 16.324219 39 16.582031 39 L 22.324219 39 L 24.074219 43.371094 C 24.199219 43.695313 24.488281 43.925781 24.828125 43.984375 L 42.289063 46.984375 C 42.816406 47.078125 43.320313 46.734375 43.4375 46.214844 L 46.976563 29.984375 C 47.03125 29.734375 46.988281 29.46875 46.855469 29.25 L 44.527344 25.429688 L 46.902344 20.429688 C 47.015625 20.191406 47.03125 19.917969 46.941406 19.671875 L 41.359375 3.671875 C 41.222656 3.28125 40.859375 3.015625 40.449219 3 Z M 39.769531 5.1875 L 44.921875 19.941406 L 43.445313 23.046875 L 39.953125 11.703125 C 39.824219 11.277344 39.421875 10.988281 38.972656 11 C 38.605469 11.011719 38.269531 11.222656 38.105469 11.550781 L 31.105469 25.550781 C 30.945313 25.871094 30.96875 26.25 31.164063 26.546875 L 39.164063 38.757813 C 39.382813 39.09375 39.785156 39.261719 40.179688 39.191406 C 40.570313 39.121094 40.886719 38.820313 40.972656 38.429688 L 43.453125 27.515625 L 44.9375 29.949219 L 41.6875 44.851563 L 25.71875 42.109375 L 24.601563 39.3125 L 36.183594 41.464844 C 36.578125 41.535156 36.980469 41.367188 37.199219 41.03125 C 37.421875 40.691406 37.421875 40.257813 37.195313 39.921875 L 28.828125 27.441406 C 28.644531 27.167969 28.332031 27 28 27 L 12 27 C 11.585938 27 11.214844 27.253906 11.066406 27.640625 C 10.917969 28.023438 11.023438 28.460938 11.328125 28.738281 L 20.414063 37 L 16.984375 37 L 5.402344 25.953125 L 16.4375 14 L 19.738281 14 L 11.261719 23.328125 C 10.992188 23.621094 10.925781 24.042969 11.085938 24.40625 C 11.246094 24.765625 11.605469 25 12 25 L 28 25 C 28.378906 25 28.726563 24.785156 28.894531 24.449219 L 35.894531 10.449219 C 36.046875 10.140625 36.035156 9.78125 35.859375 9.488281 C 35.683594 9.195313 35.375 9.011719 35.03125 9 C 34.945313 8.996094 34.859375 9.003906 34.777344 9.023438 L 23.640625 11.59375 L 24.734375 8.851563 Z M 33.15625 11.453125 L 27.382813 23 L 14.261719 23 L 22.53125 13.90625 Z M 38.78125 14.679688 L 41.964844 25.039063 L 39.546875 35.691406 L 33.152344 25.933594 Z M 14.585938 29 L 27.46875 29 L 34.210938 39.0625 L 23.464844 37.066406 Z"></path>
        </svg>
    }
]

const SkillsSection = () => {
    return (
        <Section id="skills" bg="base-100">
            <h3 className="text-primary font-extrabold">MY SKILLS</h3>
            <div className="grid grid-cols-12 gap-5 mt-10">
                {
                    skills.map(skill => (
                        <div key={skill.name} className="col-span-3 flex flex-col items-center pt-4 pb-5 border
                            transition hover:shadow-lg hover:-translate-y-2">
                            <SvgParent className="w-40 h-40">
                                {skill.icon}
                            </SvgParent>
                            <h5 className="font-bold">{skill.name}</h5>
                        </div>
                    ))
                }
            </div>
            <h4 className="text-end font-medium mt-5">and more...</h4>
        </Section>
    )
}

export default SkillsSection