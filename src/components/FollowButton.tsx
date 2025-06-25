"use client";

import React from 'react'
import { Button } from './ui/button';
import { Loader2Icon } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { toggleFollow } from '@/actions/user.action'; 

function FollowButton({userId}: {userId: string}) {
    const [isLoading, setIsLoading] = React.useState(false);

    const handleFollow = async () => {
        setIsLoading(true);

        try{
            // Assuming toggleFollow is a function that handles the follow/unfollow logic
            await toggleFollow(userId);
            toast.success("Followed successfully!");

        }catch (error) {
            toast.error("Failed to follow user.");
        }
        finally {
            setIsLoading(false);
        }
    }
  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      onClick={handleFollow}
      disabled={isLoading}
      className="w-20"
    >
      {isLoading ? <Loader2Icon className="size-4 animate-spin" /> : "Follow"}
    </Button>
  )
}

export default FollowButton
