ip = "10.0.0.1"
parts = ip.split('.')
nums = [int(x) for x in parts]

nums[0] = nums[0] << 24
nums[1] = nums[1] << 16
nums[2] = nums[2] << 8
nums[3] = nums[3]

print(sum(nums))
