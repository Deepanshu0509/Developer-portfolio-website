import axios from "axios";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  // console.log("request is : ",request);
  // console.log("headers are : ", request[headers]);

  const reqBody = await request.json();
  const secret_key = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

  try {
    const verificationURL = 'https://www.google.com/recaptcha/api/siteverify';
    // const verificationURL = `https://recaptchaenterprise.googleapis.com/v1/projects/${secret_key}/assessments?key=${API_KEY}`;
    // const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${reqBody.token}`;
    console.log("verificationURL is : ", reqBody);
    const res = await axios.post(verificationURL, {
        secret: secret_key,
        response: reqBody.token,
    });
    console.log("response before setting headers : ", response);
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace with your frontend origin
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); // Allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Allowed headers
    console.log("response is : ", res);
    console.log("response data is : ", res.data);
    if (res.data.success) {
      return NextResponse.json({
        message: "Captcha verification success!!",
        success: true,
      })
    };

    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
    }, { status: 400 });
  } catch (error) {
    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
    }, { status: 500 });
  }
  
  // if (process.env.NODE_ENV === 'development') { // Allow CORS only in development
  //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend origin
  //   res.setHeader('Access-Control-Allow-Methods', 'POST'); // Allowed methods
  //   res.setHeader('Access-Control-Allow-Headers', 'content-type'); // Allowed headers
  // }
  
}

export async function OPTIONS(request) {
  return NextResponse.json({ success: true });
}