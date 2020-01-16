import React, { Fragment } from "react";
import BlogPost from "../BlogPost/BlogPost";


export class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: null,
            blogPosts: this.mockPosts
        }
    }

    mockPosts = [
        {
            "title": "Vitamins sunt bonum est tibi?",
                "create_date": "10/01/2020",
                "modified_date": "10/01/2020",
            "username": "tester",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tellus consectetur, commodo nisl et, varius odio. Proin et vestibulum ligula, ut laoreet augue. In mollis congue velit, sit amet rutrum risus. Cras enim enim, faucibus sed ligula eget, blandit molestie enim. Cras ipsum odio, iaculis at condimentum eget, ultrices vel urna. Donec eu urna ultricies, dignissim justo quis, consectetur nulla. Sed interdum eros massa, in feugiat purus consequat non. Integer rutrum ipsum arcu, eu dapibus ex suscipit id. Pellentesque vitae odio venenatis, convallis diam et, maximus nunc. Phasellus ac commodo libero, vel placerat augue. Proin non magna fermentum, fermentum velit eu, dictum elit. Ut scelerisque, odio ut consectetur pharetra, dui risus convallis ipsum, a dapibus lectus tortor at risus. Sed turpis lacus, suscipit id ligula in, vestibulum porttitor odio.\nNunc augue velit, iaculis eget tellus ut, tristique vehicula urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vestibulum tincidunt eleifend. Praesent quis commodo ante. Proin volutpat neque nec ultrices sagittis. Sed tincidunt posuere diam nec pretium. Aliquam volutpat magna risus, sed faucibus massa eleifend sit amet. Nullam dignissim odio vel nisl imperdiet varius.\nDonec ut sollicitudin mi. Praesent rhoncus eget tortor in facilisis. Praesent suscipit vulputate nunc id auctor. Nulla cursus, nunc iaculis hendrerit gravida, felis magna accumsan felis, eu cursus odio ipsum non velit. Praesent sagittis arcu ipsum, ut vehicula erat tincidunt eget. Aenean suscipit fringilla justo, a lacinia sem condimentum nec. Fusce suscipit augue quam, ut pretium nunc maximus egestas. Aenean luctus risus vel purus mollis, non vestibulum augue condimentum. Morbi ac ante laoreet libero efficitur porta eu vel nisl. Fusce sagittis dolor sed tortor bibendum, id dictum tortor suscipit.\nMauris augue lorem, eleifend a purus id, convallis laoreet leo. Nam placerat lectus justo, lacinia facilisis ligula interdum sed. Fusce malesuada in ipsum non pretium. In vestibulum, risus aliquam ultricies tincidunt, mauris massa blandit enim, non convallis neque justo vel lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin commodo, eros eget vehicula dictum, dui neque finibus felis, at vulputate risus massa id nibh. Mauris urna ligula, dictum vel imperdiet eu, pretium eget est.",
            "category": "health"
        },
        {
            "title": "Vitamins sunt bonum est tibi?",
                "create_date": "10/01/2020",
                "modified_date": "10/01/2020",
            "username": "tester",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tellus consectetur, commodo nisl et, varius odio. Proin et vestibulum ligula, ut laoreet augue. In mollis congue velit, sit amet rutrum risus. Cras enim enim, faucibus sed ligula eget, blandit molestie enim. Cras ipsum odio, iaculis at condimentum eget, ultrices vel urna. Donec eu urna ultricies, dignissim justo quis, consectetur nulla. Sed interdum eros massa, in feugiat purus consequat non. Integer rutrum ipsum arcu, eu dapibus ex suscipit id. Pellentesque vitae odio venenatis, convallis diam et, maximus nunc. Phasellus ac commodo libero, vel placerat augue. Proin non magna fermentum, fermentum velit eu, dictum elit. Ut scelerisque, odio ut consectetur pharetra, dui risus convallis ipsum, a dapibus lectus tortor at risus. Sed turpis lacus, suscipit id ligula in, vestibulum porttitor odio.\nNunc augue velit, iaculis eget tellus ut, tristique vehicula urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vestibulum tincidunt eleifend. Praesent quis commodo ante. Proin volutpat neque nec ultrices sagittis. Sed tincidunt posuere diam nec pretium. Aliquam volutpat magna risus, sed faucibus massa eleifend sit amet. Nullam dignissim odio vel nisl imperdiet varius.\nDonec ut sollicitudin mi. Praesent rhoncus eget tortor in facilisis. Praesent suscipit vulputate nunc id auctor. Nulla cursus, nunc iaculis hendrerit gravida, felis magna accumsan felis, eu cursus odio ipsum non velit. Praesent sagittis arcu ipsum, ut vehicula erat tincidunt eget. Aenean suscipit fringilla justo, a lacinia sem condimentum nec. Fusce suscipit augue quam, ut pretium nunc maximus egestas. Aenean luctus risus vel purus mollis, non vestibulum augue condimentum. Morbi ac ante laoreet libero efficitur porta eu vel nisl. Fusce sagittis dolor sed tortor bibendum, id dictum tortor suscipit.\nMauris augue lorem, eleifend a purus id, convallis laoreet leo. Nam placerat lectus justo, lacinia facilisis ligula interdum sed. Fusce malesuada in ipsum non pretium. In vestibulum, risus aliquam ultricies tincidunt, mauris massa blandit enim, non convallis neque justo vel lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin commodo, eros eget vehicula dictum, dui neque finibus felis, at vulputate risus massa id nibh. Mauris urna ligula, dictum vel imperdiet eu, pretium eget est.",
            "category": "health"
        },
        {
            "title": "Vitamins sunt bonum est tibi?",
                "create_date": "10/01/2020",
                "modified_date": "10/01/2020",
            "username": "tester",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tellus consectetur, commodo nisl et, varius odio. Proin et vestibulum ligula, ut laoreet augue. In mollis congue velit, sit amet rutrum risus. Cras enim enim, faucibus sed ligula eget, blandit molestie enim. Cras ipsum odio, iaculis at condimentum eget, ultrices vel urna. Donec eu urna ultricies, dignissim justo quis, consectetur nulla. Sed interdum eros massa, in feugiat purus consequat non. Integer rutrum ipsum arcu, eu dapibus ex suscipit id. Pellentesque vitae odio venenatis, convallis diam et, maximus nunc. Phasellus ac commodo libero, vel placerat augue. Proin non magna fermentum, fermentum velit eu, dictum elit. Ut scelerisque, odio ut consectetur pharetra, dui risus convallis ipsum, a dapibus lectus tortor at risus. Sed turpis lacus, suscipit id ligula in, vestibulum porttitor odio.\nNunc augue velit, iaculis eget tellus ut, tristique vehicula urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vestibulum tincidunt eleifend. Praesent quis commodo ante. Proin volutpat neque nec ultrices sagittis. Sed tincidunt posuere diam nec pretium. Aliquam volutpat magna risus, sed faucibus massa eleifend sit amet. Nullam dignissim odio vel nisl imperdiet varius.\nDonec ut sollicitudin mi. Praesent rhoncus eget tortor in facilisis. Praesent suscipit vulputate nunc id auctor. Nulla cursus, nunc iaculis hendrerit gravida, felis magna accumsan felis, eu cursus odio ipsum non velit. Praesent sagittis arcu ipsum, ut vehicula erat tincidunt eget. Aenean suscipit fringilla justo, a lacinia sem condimentum nec. Fusce suscipit augue quam, ut pretium nunc maximus egestas. Aenean luctus risus vel purus mollis, non vestibulum augue condimentum. Morbi ac ante laoreet libero efficitur porta eu vel nisl. Fusce sagittis dolor sed tortor bibendum, id dictum tortor suscipit.\nMauris augue lorem, eleifend a purus id, convallis laoreet leo. Nam placerat lectus justo, lacinia facilisis ligula interdum sed. Fusce malesuada in ipsum non pretium. In vestibulum, risus aliquam ultricies tincidunt, mauris massa blandit enim, non convallis neque justo vel lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin commodo, eros eget vehicula dictum, dui neque finibus felis, at vulputate risus massa id nibh. Mauris urna ligula, dictum vel imperdiet eu, pretium eget est.",
            "category": "health"
        }
    ]

    render(){
        const { blogPosts } = this.state
        return(
            <Fragment>
                {blogPosts.map(post => (
                    <BlogPost key={post._id} blogPost={post} />
                ))}
            </Fragment>
        )
    }

}

export default Blog